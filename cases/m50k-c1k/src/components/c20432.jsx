import React from 'react';
const LABEL_20432 = 'component_20432';
export function Component20432({ value = 20432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20432, 'data-value': derived.doubled }, children);
}
export default Component20432;
