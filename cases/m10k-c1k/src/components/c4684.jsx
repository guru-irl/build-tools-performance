import React from 'react';
const LABEL_4684 = 'component_4684';
export function Component4684({ value = 4684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4684, 'data-value': derived.doubled }, children);
}
export default Component4684;
