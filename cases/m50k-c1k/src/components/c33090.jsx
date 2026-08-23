import React from 'react';
const LABEL_33090 = 'component_33090';
export function Component33090({ value = 33090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33090, 'data-value': derived.doubled }, children);
}
export default Component33090;
