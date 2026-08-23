import React from 'react';
const LABEL_2684 = 'component_2684';
export function Component2684({ value = 2684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2684, 'data-value': derived.doubled }, children);
}
export default Component2684;
