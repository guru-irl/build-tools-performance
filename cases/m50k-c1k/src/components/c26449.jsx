import React from 'react';
const LABEL_26449 = 'component_26449';
export function Component26449({ value = 26449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26449, 'data-value': derived.doubled }, children);
}
export default Component26449;
