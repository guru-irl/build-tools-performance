import React from 'react';
const LABEL_38777 = 'component_38777';
export function Component38777({ value = 38777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38777, 'data-value': derived.doubled }, children);
}
export default Component38777;
