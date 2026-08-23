import React from 'react';
const LABEL_6706 = 'component_6706';
export function Component6706({ value = 6706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6706, 'data-value': derived.doubled }, children);
}
export default Component6706;
