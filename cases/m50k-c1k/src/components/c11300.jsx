import React from 'react';
const LABEL_11300 = 'component_11300';
export function Component11300({ value = 11300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11300, 'data-value': derived.doubled }, children);
}
export default Component11300;
