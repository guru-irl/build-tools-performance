import React from 'react';
const LABEL_18954 = 'component_18954';
export function Component18954({ value = 18954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18954, 'data-value': derived.doubled }, children);
}
export default Component18954;
