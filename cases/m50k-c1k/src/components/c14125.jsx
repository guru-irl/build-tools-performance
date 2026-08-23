import React from 'react';
const LABEL_14125 = 'component_14125';
export function Component14125({ value = 14125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14125, 'data-value': derived.doubled }, children);
}
export default Component14125;
