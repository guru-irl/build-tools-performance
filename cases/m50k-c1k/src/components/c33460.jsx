import React from 'react';
const LABEL_33460 = 'component_33460';
export function Component33460({ value = 33460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33460, 'data-value': derived.doubled }, children);
}
export default Component33460;
