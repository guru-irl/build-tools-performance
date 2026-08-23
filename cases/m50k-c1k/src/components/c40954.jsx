import React from 'react';
const LABEL_40954 = 'component_40954';
export function Component40954({ value = 40954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40954, 'data-value': derived.doubled }, children);
}
export default Component40954;
