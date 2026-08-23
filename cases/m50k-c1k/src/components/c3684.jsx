import React from 'react';
const LABEL_3684 = 'component_3684';
export function Component3684({ value = 3684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3684, 'data-value': derived.doubled }, children);
}
export default Component3684;
