import React from 'react';
const LABEL_20684 = 'component_20684';
export function Component20684({ value = 20684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20684, 'data-value': derived.doubled }, children);
}
export default Component20684;
