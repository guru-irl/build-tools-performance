import React from 'react';
const LABEL_11684 = 'component_11684';
export function Component11684({ value = 11684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11684, 'data-value': derived.doubled }, children);
}
export default Component11684;
