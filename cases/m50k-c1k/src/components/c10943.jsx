import React from 'react';
const LABEL_10943 = 'component_10943';
export function Component10943({ value = 10943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10943, 'data-value': derived.doubled }, children);
}
export default Component10943;
