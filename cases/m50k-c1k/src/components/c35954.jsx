import React from 'react';
const LABEL_35954 = 'component_35954';
export function Component35954({ value = 35954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35954, 'data-value': derived.doubled }, children);
}
export default Component35954;
