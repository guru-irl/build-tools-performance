import React from 'react';
const LABEL_30390 = 'component_30390';
export function Component30390({ value = 30390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30390, 'data-value': derived.doubled }, children);
}
export default Component30390;
