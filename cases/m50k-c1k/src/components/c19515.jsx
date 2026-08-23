import React from 'react';
const LABEL_19515 = 'component_19515';
export function Component19515({ value = 19515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19515, 'data-value': derived.doubled }, children);
}
export default Component19515;
