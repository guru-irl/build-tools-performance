import React from 'react';
const LABEL_14402 = 'component_14402';
export function Component14402({ value = 14402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14402, 'data-value': derived.doubled }, children);
}
export default Component14402;
