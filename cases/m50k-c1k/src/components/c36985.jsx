import React from 'react';
const LABEL_36985 = 'component_36985';
export function Component36985({ value = 36985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36985, 'data-value': derived.doubled }, children);
}
export default Component36985;
