import React from 'react';
const LABEL_33345 = 'component_33345';
export function Component33345({ value = 33345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33345, 'data-value': derived.doubled }, children);
}
export default Component33345;
