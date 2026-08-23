import React from 'react';
const LABEL_23684 = 'component_23684';
export function Component23684({ value = 23684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23684, 'data-value': derived.doubled }, children);
}
export default Component23684;
