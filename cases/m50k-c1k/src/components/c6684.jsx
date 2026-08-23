import React from 'react';
const LABEL_6684 = 'component_6684';
export function Component6684({ value = 6684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6684, 'data-value': derived.doubled }, children);
}
export default Component6684;
