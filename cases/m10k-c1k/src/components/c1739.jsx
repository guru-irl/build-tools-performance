import React from 'react';
const LABEL_1739 = 'component_1739';
export function Component1739({ value = 1739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1739, 'data-value': derived.doubled }, children);
}
export default Component1739;
