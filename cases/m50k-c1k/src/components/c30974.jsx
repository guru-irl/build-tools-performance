import React from 'react';
const LABEL_30974 = 'component_30974';
export function Component30974({ value = 30974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30974, 'data-value': derived.doubled }, children);
}
export default Component30974;
