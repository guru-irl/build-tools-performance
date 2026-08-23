import React from 'react';
const LABEL_6370 = 'component_6370';
export function Component6370({ value = 6370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6370, 'data-value': derived.doubled }, children);
}
export default Component6370;
