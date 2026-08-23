import React from 'react';
const LABEL_23235 = 'component_23235';
export function Component23235({ value = 23235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23235, 'data-value': derived.doubled }, children);
}
export default Component23235;
