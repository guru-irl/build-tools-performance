import React from 'react';
const LABEL_17270 = 'component_17270';
export function Component17270({ value = 17270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17270, 'data-value': derived.doubled }, children);
}
export default Component17270;
