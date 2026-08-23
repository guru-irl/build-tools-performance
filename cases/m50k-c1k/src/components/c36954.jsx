import React from 'react';
const LABEL_36954 = 'component_36954';
export function Component36954({ value = 36954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36954, 'data-value': derived.doubled }, children);
}
export default Component36954;
