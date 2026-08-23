import React from 'react';
const LABEL_40989 = 'component_40989';
export function Component40989({ value = 40989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40989, 'data-value': derived.doubled }, children);
}
export default Component40989;
