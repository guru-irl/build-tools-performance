import React from 'react';
const LABEL_36435 = 'component_36435';
export function Component36435({ value = 36435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36435, 'data-value': derived.doubled }, children);
}
export default Component36435;
