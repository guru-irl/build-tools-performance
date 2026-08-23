import React from 'react';
const LABEL_33058 = 'component_33058';
export function Component33058({ value = 33058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33058, 'data-value': derived.doubled }, children);
}
export default Component33058;
