import React from 'react';
const LABEL_17880 = 'component_17880';
export function Component17880({ value = 17880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17880, 'data-value': derived.doubled }, children);
}
export default Component17880;
