import React from 'react';
const LABEL_17881 = 'component_17881';
export function Component17881({ value = 17881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17881, 'data-value': derived.doubled }, children);
}
export default Component17881;
