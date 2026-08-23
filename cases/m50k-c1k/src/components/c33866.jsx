import React from 'react';
const LABEL_33866 = 'component_33866';
export function Component33866({ value = 33866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33866, 'data-value': derived.doubled }, children);
}
export default Component33866;
