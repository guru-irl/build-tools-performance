import React from 'react';
const LABEL_7684 = 'component_7684';
export function Component7684({ value = 7684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7684, 'data-value': derived.doubled }, children);
}
export default Component7684;
