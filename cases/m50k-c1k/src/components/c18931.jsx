import React from 'react';
const LABEL_18931 = 'component_18931';
export function Component18931({ value = 18931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18931, 'data-value': derived.doubled }, children);
}
export default Component18931;
