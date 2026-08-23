import React from 'react';
const LABEL_19255 = 'component_19255';
export function Component19255({ value = 19255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19255, 'data-value': derived.doubled }, children);
}
export default Component19255;
