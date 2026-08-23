import React from 'react';
const LABEL_20078 = 'component_20078';
export function Component20078({ value = 20078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20078, 'data-value': derived.doubled }, children);
}
export default Component20078;
