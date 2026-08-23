import React from 'react';
const LABEL_15323 = 'component_15323';
export function Component15323({ value = 15323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15323, 'data-value': derived.doubled }, children);
}
export default Component15323;
