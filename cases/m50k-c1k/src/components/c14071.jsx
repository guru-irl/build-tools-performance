import React from 'react';
const LABEL_14071 = 'component_14071';
export function Component14071({ value = 14071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14071, 'data-value': derived.doubled }, children);
}
export default Component14071;
