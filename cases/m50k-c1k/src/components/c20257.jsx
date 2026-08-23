import React from 'react';
const LABEL_20257 = 'component_20257';
export function Component20257({ value = 20257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20257, 'data-value': derived.doubled }, children);
}
export default Component20257;
