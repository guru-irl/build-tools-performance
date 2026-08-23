import React from 'react';
const LABEL_5684 = 'component_5684';
export function Component5684({ value = 5684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5684, 'data-value': derived.doubled }, children);
}
export default Component5684;
