import React from 'react';
const LABEL_33996 = 'component_33996';
export function Component33996({ value = 33996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33996, 'data-value': derived.doubled }, children);
}
export default Component33996;
