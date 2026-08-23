import React from 'react';
const LABEL_34612 = 'component_34612';
export function Component34612({ value = 34612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34612, 'data-value': derived.doubled }, children);
}
export default Component34612;
