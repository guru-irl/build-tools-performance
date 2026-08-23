import React from 'react';
const LABEL_28370 = 'component_28370';
export function Component28370({ value = 28370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28370, 'data-value': derived.doubled }, children);
}
export default Component28370;
