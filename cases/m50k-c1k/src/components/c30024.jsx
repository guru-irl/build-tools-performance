import React from 'react';
const LABEL_30024 = 'component_30024';
export function Component30024({ value = 30024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30024, 'data-value': derived.doubled }, children);
}
export default Component30024;
