import React from 'react';
const LABEL_17259 = 'component_17259';
export function Component17259({ value = 17259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17259, 'data-value': derived.doubled }, children);
}
export default Component17259;
