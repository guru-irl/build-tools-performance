import React from 'react';
const LABEL_30706 = 'component_30706';
export function Component30706({ value = 30706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30706, 'data-value': derived.doubled }, children);
}
export default Component30706;
