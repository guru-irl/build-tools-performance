import React from 'react';
const LABEL_26370 = 'component_26370';
export function Component26370({ value = 26370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26370, 'data-value': derived.doubled }, children);
}
export default Component26370;
