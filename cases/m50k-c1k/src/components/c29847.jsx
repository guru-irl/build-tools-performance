import React from 'react';
const LABEL_29847 = 'component_29847';
export function Component29847({ value = 29847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29847, 'data-value': derived.doubled }, children);
}
export default Component29847;
