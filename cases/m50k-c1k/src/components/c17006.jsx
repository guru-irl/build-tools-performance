import React from 'react';
const LABEL_17006 = 'component_17006';
export function Component17006({ value = 17006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17006, 'data-value': derived.doubled }, children);
}
export default Component17006;
