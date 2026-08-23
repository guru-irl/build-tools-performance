import React from 'react';
const LABEL_36244 = 'component_36244';
export function Component36244({ value = 36244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36244, 'data-value': derived.doubled }, children);
}
export default Component36244;
