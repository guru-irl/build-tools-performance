import React from 'react';
const LABEL_6931 = 'component_6931';
export function Component6931({ value = 6931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6931, 'data-value': derived.doubled }, children);
}
export default Component6931;
