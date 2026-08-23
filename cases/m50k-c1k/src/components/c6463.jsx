import React from 'react';
const LABEL_6463 = 'component_6463';
export function Component6463({ value = 6463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6463, 'data-value': derived.doubled }, children);
}
export default Component6463;
