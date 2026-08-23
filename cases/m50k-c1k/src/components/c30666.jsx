import React from 'react';
const LABEL_30666 = 'component_30666';
export function Component30666({ value = 30666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30666, 'data-value': derived.doubled }, children);
}
export default Component30666;
