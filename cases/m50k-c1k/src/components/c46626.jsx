import React from 'react';
const LABEL_46626 = 'component_46626';
export function Component46626({ value = 46626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46626, 'data-value': derived.doubled }, children);
}
export default Component46626;
