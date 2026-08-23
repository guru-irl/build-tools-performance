import React from 'react';
const LABEL_6621 = 'component_6621';
export function Component6621({ value = 6621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6621, 'data-value': derived.doubled }, children);
}
export default Component6621;
