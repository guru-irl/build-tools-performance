import React from 'react';
const LABEL_19262 = 'component_19262';
export function Component19262({ value = 19262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19262, 'data-value': derived.doubled }, children);
}
export default Component19262;
