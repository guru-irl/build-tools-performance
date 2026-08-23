import React from 'react';
const LABEL_36930 = 'component_36930';
export function Component36930({ value = 36930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36930, 'data-value': derived.doubled }, children);
}
export default Component36930;
