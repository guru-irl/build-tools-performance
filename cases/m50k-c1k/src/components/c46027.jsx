import React from 'react';
const LABEL_46027 = 'component_46027';
export function Component46027({ value = 46027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46027, 'data-value': derived.doubled }, children);
}
export default Component46027;
