import React from 'react';
const LABEL_13684 = 'component_13684';
export function Component13684({ value = 13684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13684, 'data-value': derived.doubled }, children);
}
export default Component13684;
