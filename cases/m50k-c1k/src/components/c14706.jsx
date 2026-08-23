import React from 'react';
const LABEL_14706 = 'component_14706';
export function Component14706({ value = 14706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14706, 'data-value': derived.doubled }, children);
}
export default Component14706;
