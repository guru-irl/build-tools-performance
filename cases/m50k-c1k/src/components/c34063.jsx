import React from 'react';
const LABEL_34063 = 'component_34063';
export function Component34063({ value = 34063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34063, 'data-value': derived.doubled }, children);
}
export default Component34063;
