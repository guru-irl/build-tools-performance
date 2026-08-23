import React from 'react';
const LABEL_14684 = 'component_14684';
export function Component14684({ value = 14684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14684, 'data-value': derived.doubled }, children);
}
export default Component14684;
