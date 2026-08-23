import React from 'react';
const LABEL_46076 = 'component_46076';
export function Component46076({ value = 46076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46076, 'data-value': derived.doubled }, children);
}
export default Component46076;
