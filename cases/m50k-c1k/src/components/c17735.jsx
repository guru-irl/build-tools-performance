import React from 'react';
const LABEL_17735 = 'component_17735';
export function Component17735({ value = 17735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17735, 'data-value': derived.doubled }, children);
}
export default Component17735;
