import React from 'react';
const LABEL_45482 = 'component_45482';
export function Component45482({ value = 45482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45482, 'data-value': derived.doubled }, children);
}
export default Component45482;
