import React from 'react';
const LABEL_20985 = 'component_20985';
export function Component20985({ value = 20985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20985, 'data-value': derived.doubled }, children);
}
export default Component20985;
