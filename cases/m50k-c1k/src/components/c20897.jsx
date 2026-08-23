import React from 'react';
const LABEL_20897 = 'component_20897';
export function Component20897({ value = 20897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20897, 'data-value': derived.doubled }, children);
}
export default Component20897;
