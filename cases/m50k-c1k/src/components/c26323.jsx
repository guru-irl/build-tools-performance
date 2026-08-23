import React from 'react';
const LABEL_26323 = 'component_26323';
export function Component26323({ value = 26323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26323, 'data-value': derived.doubled }, children);
}
export default Component26323;
