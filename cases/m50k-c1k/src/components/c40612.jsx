import React from 'react';
const LABEL_40612 = 'component_40612';
export function Component40612({ value = 40612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40612, 'data-value': derived.doubled }, children);
}
export default Component40612;
