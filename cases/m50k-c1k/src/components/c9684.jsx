import React from 'react';
const LABEL_9684 = 'component_9684';
export function Component9684({ value = 9684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9684, 'data-value': derived.doubled }, children);
}
export default Component9684;
