import React from 'react';
const LABEL_13893 = 'component_13893';
export function Component13893({ value = 13893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13893, 'data-value': derived.doubled }, children);
}
export default Component13893;
