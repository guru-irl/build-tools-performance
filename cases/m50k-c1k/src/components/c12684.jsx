import React from 'react';
const LABEL_12684 = 'component_12684';
export function Component12684({ value = 12684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12684, 'data-value': derived.doubled }, children);
}
export default Component12684;
