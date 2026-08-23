import React from 'react';
const LABEL_38421 = 'component_38421';
export function Component38421({ value = 38421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38421, 'data-value': derived.doubled }, children);
}
export default Component38421;
