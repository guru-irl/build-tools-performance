import React from 'react';
const LABEL_34177 = 'component_34177';
export function Component34177({ value = 34177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34177, 'data-value': derived.doubled }, children);
}
export default Component34177;
