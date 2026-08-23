import React from 'react';
const LABEL_20402 = 'component_20402';
export function Component20402({ value = 20402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20402, 'data-value': derived.doubled }, children);
}
export default Component20402;
