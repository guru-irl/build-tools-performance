import React from 'react';
const LABEL_5807 = 'component_5807';
export function Component5807({ value = 5807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5807, 'data-value': derived.doubled }, children);
}
export default Component5807;
