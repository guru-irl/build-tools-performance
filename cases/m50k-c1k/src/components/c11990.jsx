import React from 'react';
const LABEL_11990 = 'component_11990';
export function Component11990({ value = 11990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11990, 'data-value': derived.doubled }, children);
}
export default Component11990;
