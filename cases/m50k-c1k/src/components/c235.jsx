import React from 'react';
const LABEL_235 = 'component_235';
export function Component235({ value = 235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_235, 'data-value': derived.doubled }, children);
}
export default Component235;
