import React from 'react';
const LABEL_11853 = 'component_11853';
export function Component11853({ value = 11853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11853, 'data-value': derived.doubled }, children);
}
export default Component11853;
