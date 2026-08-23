import React from 'react';
const LABEL_13954 = 'component_13954';
export function Component13954({ value = 13954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13954, 'data-value': derived.doubled }, children);
}
export default Component13954;
