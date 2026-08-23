import React from 'react';
const LABEL_34361 = 'component_34361';
export function Component34361({ value = 34361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34361, 'data-value': derived.doubled }, children);
}
export default Component34361;
