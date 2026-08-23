import React from 'react';
const LABEL_30323 = 'component_30323';
export function Component30323({ value = 30323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30323, 'data-value': derived.doubled }, children);
}
export default Component30323;
