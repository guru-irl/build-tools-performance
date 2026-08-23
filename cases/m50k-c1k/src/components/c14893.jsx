import React from 'react';
const LABEL_14893 = 'component_14893';
export function Component14893({ value = 14893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14893, 'data-value': derived.doubled }, children);
}
export default Component14893;
