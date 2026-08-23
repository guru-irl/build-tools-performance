import React from 'react';
const LABEL_17943 = 'component_17943';
export function Component17943({ value = 17943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17943, 'data-value': derived.doubled }, children);
}
export default Component17943;
