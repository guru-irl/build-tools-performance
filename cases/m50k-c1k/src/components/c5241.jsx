import React from 'react';
const LABEL_5241 = 'component_5241';
export function Component5241({ value = 5241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5241, 'data-value': derived.doubled }, children);
}
export default Component5241;
