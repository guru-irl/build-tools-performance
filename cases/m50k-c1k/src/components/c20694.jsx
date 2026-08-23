import React from 'react';
const LABEL_20694 = 'component_20694';
export function Component20694({ value = 20694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20694, 'data-value': derived.doubled }, children);
}
export default Component20694;
