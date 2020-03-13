import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [{ model: File, as: 'avatar', attributes: ['name', 'path'] }],
    });

    const info = [];
    providers.map(user => {
      const { id, name, email, provider } = user;
      info.push({ id, name, email, provider });
    });

    return res.json(info);
  }
}

export default new ProviderController();
