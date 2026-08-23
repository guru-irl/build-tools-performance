import React from 'react';
const LABEL_43848 = 'component_43848';
export function Component43848({ value = 43848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43848, 'data-value': derived.doubled }, children);
}
export default Component43848;
