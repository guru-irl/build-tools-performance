import React from 'react';
const LABEL_17231 = 'component_17231';
export function Component17231({ value = 17231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17231, 'data-value': derived.doubled }, children);
}
export default Component17231;
