import React from 'react';
const LABEL_36941 = 'component_36941';
export function Component36941({ value = 36941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36941, 'data-value': derived.doubled }, children);
}
export default Component36941;
