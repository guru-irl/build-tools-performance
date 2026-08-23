import React from 'react';
const LABEL_33270 = 'component_33270';
export function Component33270({ value = 33270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33270, 'data-value': derived.doubled }, children);
}
export default Component33270;
