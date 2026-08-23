import React from 'react';
const LABEL_7370 = 'component_7370';
export function Component7370({ value = 7370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7370, 'data-value': derived.doubled }, children);
}
export default Component7370;
