import React from 'react';
const LABEL_20036 = 'component_20036';
export function Component20036({ value = 20036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20036, 'data-value': derived.doubled }, children);
}
export default Component20036;
