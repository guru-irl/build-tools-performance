import React from 'react';
const LABEL_24370 = 'component_24370';
export function Component24370({ value = 24370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24370, 'data-value': derived.doubled }, children);
}
export default Component24370;
