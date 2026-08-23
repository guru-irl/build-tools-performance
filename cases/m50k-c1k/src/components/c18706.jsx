import React from 'react';
const LABEL_18706 = 'component_18706';
export function Component18706({ value = 18706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18706, 'data-value': derived.doubled }, children);
}
export default Component18706;
