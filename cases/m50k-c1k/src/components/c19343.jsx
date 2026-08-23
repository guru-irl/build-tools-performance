import React from 'react';
const LABEL_19343 = 'component_19343';
export function Component19343({ value = 19343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19343, 'data-value': derived.doubled }, children);
}
export default Component19343;
