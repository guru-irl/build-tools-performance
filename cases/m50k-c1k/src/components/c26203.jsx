import React from 'react';
const LABEL_26203 = 'component_26203';
export function Component26203({ value = 26203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26203, 'data-value': derived.doubled }, children);
}
export default Component26203;
