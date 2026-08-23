import React from 'react';
const LABEL_10954 = 'component_10954';
export function Component10954({ value = 10954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10954, 'data-value': derived.doubled }, children);
}
export default Component10954;
