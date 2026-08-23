import React from 'react';
const LABEL_30248 = 'component_30248';
export function Component30248({ value = 30248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30248, 'data-value': derived.doubled }, children);
}
export default Component30248;
