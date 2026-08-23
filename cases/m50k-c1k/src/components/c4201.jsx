import React from 'react';
const LABEL_4201 = 'component_4201';
export function Component4201({ value = 4201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4201, 'data-value': derived.doubled }, children);
}
export default Component4201;
