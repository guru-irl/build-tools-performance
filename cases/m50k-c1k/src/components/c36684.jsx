import React from 'react';
const LABEL_36684 = 'component_36684';
export function Component36684({ value = 36684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36684, 'data-value': derived.doubled }, children);
}
export default Component36684;
