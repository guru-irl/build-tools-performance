import React from 'react';
const LABEL_15992 = 'component_15992';
export function Component15992({ value = 15992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15992, 'data-value': derived.doubled }, children);
}
export default Component15992;
