import React from 'react';
const LABEL_24684 = 'component_24684';
export function Component24684({ value = 24684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24684, 'data-value': derived.doubled }, children);
}
export default Component24684;
