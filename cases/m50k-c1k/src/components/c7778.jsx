import React from 'react';
const LABEL_7778 = 'component_7778';
export function Component7778({ value = 7778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7778, 'data-value': derived.doubled }, children);
}
export default Component7778;
