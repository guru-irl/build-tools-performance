import React from 'react';
const LABEL_36739 = 'component_36739';
export function Component36739({ value = 36739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36739, 'data-value': derived.doubled }, children);
}
export default Component36739;
