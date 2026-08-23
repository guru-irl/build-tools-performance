import React from 'react';
const LABEL_38684 = 'component_38684';
export function Component38684({ value = 38684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38684, 'data-value': derived.doubled }, children);
}
export default Component38684;
