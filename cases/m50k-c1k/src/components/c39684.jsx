import React from 'react';
const LABEL_39684 = 'component_39684';
export function Component39684({ value = 39684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39684, 'data-value': derived.doubled }, children);
}
export default Component39684;
