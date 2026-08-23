import React from 'react';
const LABEL_5954 = 'component_5954';
export function Component5954({ value = 5954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5954, 'data-value': derived.doubled }, children);
}
export default Component5954;
