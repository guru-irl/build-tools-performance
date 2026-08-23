import React from 'react';
const LABEL_42238 = 'component_42238';
export function Component42238({ value = 42238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42238, 'data-value': derived.doubled }, children);
}
export default Component42238;
