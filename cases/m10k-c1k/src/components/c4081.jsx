import React from 'react';
const LABEL_4081 = 'component_4081';
export function Component4081({ value = 4081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4081, 'data-value': derived.doubled }, children);
}
export default Component4081;
