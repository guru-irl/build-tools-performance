import React from 'react';
const LABEL_32931 = 'component_32931';
export function Component32931({ value = 32931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32931, 'data-value': derived.doubled }, children);
}
export default Component32931;
