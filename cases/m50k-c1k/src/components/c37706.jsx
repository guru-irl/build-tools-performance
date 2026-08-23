import React from 'react';
const LABEL_37706 = 'component_37706';
export function Component37706({ value = 37706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37706, 'data-value': derived.doubled }, children);
}
export default Component37706;
