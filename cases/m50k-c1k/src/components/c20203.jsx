import React from 'react';
const LABEL_20203 = 'component_20203';
export function Component20203({ value = 20203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20203, 'data-value': derived.doubled }, children);
}
export default Component20203;
