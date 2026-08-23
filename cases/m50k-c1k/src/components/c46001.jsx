import React from 'react';
const LABEL_46001 = 'component_46001';
export function Component46001({ value = 46001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46001, 'data-value': derived.doubled }, children);
}
export default Component46001;
