import React from 'react';
const LABEL_14975 = 'component_14975';
export function Component14975({ value = 14975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14975, 'data-value': derived.doubled }, children);
}
export default Component14975;
