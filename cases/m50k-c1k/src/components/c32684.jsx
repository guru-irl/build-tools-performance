import React from 'react';
const LABEL_32684 = 'component_32684';
export function Component32684({ value = 32684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32684, 'data-value': derived.doubled }, children);
}
export default Component32684;
