import React from 'react';
const LABEL_11238 = 'component_11238';
export function Component11238({ value = 11238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11238, 'data-value': derived.doubled }, children);
}
export default Component11238;
