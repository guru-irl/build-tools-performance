import React from 'react';
const LABEL_13370 = 'component_13370';
export function Component13370({ value = 13370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13370, 'data-value': derived.doubled }, children);
}
export default Component13370;
