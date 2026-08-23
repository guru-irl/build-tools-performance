import React from 'react';
const LABEL_33684 = 'component_33684';
export function Component33684({ value = 33684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33684, 'data-value': derived.doubled }, children);
}
export default Component33684;
