import React from 'react';
const LABEL_17684 = 'component_17684';
export function Component17684({ value = 17684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17684, 'data-value': derived.doubled }, children);
}
export default Component17684;
