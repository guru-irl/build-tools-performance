import React from 'react';
const LABEL_46757 = 'component_46757';
export function Component46757({ value = 46757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46757, 'data-value': derived.doubled }, children);
}
export default Component46757;
