import React from 'react';
const LABEL_17008 = 'component_17008';
export function Component17008({ value = 17008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17008, 'data-value': derived.doubled }, children);
}
export default Component17008;
