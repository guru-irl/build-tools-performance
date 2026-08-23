import React from 'react';
const LABEL_34421 = 'component_34421';
export function Component34421({ value = 34421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34421, 'data-value': derived.doubled }, children);
}
export default Component34421;
