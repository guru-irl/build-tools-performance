import React from 'react';
const LABEL_30936 = 'component_30936';
export function Component30936({ value = 30936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30936, 'data-value': derived.doubled }, children);
}
export default Component30936;
