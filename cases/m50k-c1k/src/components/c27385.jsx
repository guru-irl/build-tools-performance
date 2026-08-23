import React from 'react';
const LABEL_27385 = 'component_27385';
export function Component27385({ value = 27385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27385, 'data-value': derived.doubled }, children);
}
export default Component27385;
