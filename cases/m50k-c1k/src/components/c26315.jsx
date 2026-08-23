import React from 'react';
const LABEL_26315 = 'component_26315';
export function Component26315({ value = 26315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26315, 'data-value': derived.doubled }, children);
}
export default Component26315;
