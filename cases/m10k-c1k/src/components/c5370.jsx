import React from 'react';
const LABEL_5370 = 'component_5370';
export function Component5370({ value = 5370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5370, 'data-value': derived.doubled }, children);
}
export default Component5370;
