import React from 'react';
const LABEL_15370 = 'component_15370';
export function Component15370({ value = 15370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15370, 'data-value': derived.doubled }, children);
}
export default Component15370;
