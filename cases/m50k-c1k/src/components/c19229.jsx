import React from 'react';
const LABEL_19229 = 'component_19229';
export function Component19229({ value = 19229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19229, 'data-value': derived.doubled }, children);
}
export default Component19229;
