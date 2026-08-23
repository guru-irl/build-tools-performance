import React from 'react';
const LABEL_36713 = 'component_36713';
export function Component36713({ value = 36713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36713, 'data-value': derived.doubled }, children);
}
export default Component36713;
