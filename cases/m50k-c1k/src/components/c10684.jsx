import React from 'react';
const LABEL_10684 = 'component_10684';
export function Component10684({ value = 10684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10684, 'data-value': derived.doubled }, children);
}
export default Component10684;
