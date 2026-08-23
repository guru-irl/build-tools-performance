import React from 'react';
const LABEL_15958 = 'component_15958';
export function Component15958({ value = 15958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15958, 'data-value': derived.doubled }, children);
}
export default Component15958;
