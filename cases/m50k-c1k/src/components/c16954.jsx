import React from 'react';
const LABEL_16954 = 'component_16954';
export function Component16954({ value = 16954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16954, 'data-value': derived.doubled }, children);
}
export default Component16954;
