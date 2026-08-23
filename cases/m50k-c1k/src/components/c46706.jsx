import React from 'react';
const LABEL_46706 = 'component_46706';
export function Component46706({ value = 46706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46706, 'data-value': derived.doubled }, children);
}
export default Component46706;
