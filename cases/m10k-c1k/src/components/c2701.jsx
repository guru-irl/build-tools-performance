import React from 'react';
const LABEL_2701 = 'component_2701';
export function Component2701({ value = 2701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2701, 'data-value': derived.doubled }, children);
}
export default Component2701;
