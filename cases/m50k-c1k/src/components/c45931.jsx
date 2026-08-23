import React from 'react';
const LABEL_45931 = 'component_45931';
export function Component45931({ value = 45931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45931, 'data-value': derived.doubled }, children);
}
export default Component45931;
