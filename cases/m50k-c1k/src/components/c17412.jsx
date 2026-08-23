import React from 'react';
const LABEL_17412 = 'component_17412';
export function Component17412({ value = 17412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17412, 'data-value': derived.doubled }, children);
}
export default Component17412;
