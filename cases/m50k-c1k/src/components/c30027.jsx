import React from 'react';
const LABEL_30027 = 'component_30027';
export function Component30027({ value = 30027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30027, 'data-value': derived.doubled }, children);
}
export default Component30027;
