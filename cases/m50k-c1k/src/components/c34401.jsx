import React from 'react';
const LABEL_34401 = 'component_34401';
export function Component34401({ value = 34401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34401, 'data-value': derived.doubled }, children);
}
export default Component34401;
