import React from 'react';
const LABEL_37370 = 'component_37370';
export function Component37370({ value = 37370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37370, 'data-value': derived.doubled }, children);
}
export default Component37370;
