import React from 'react';
const LABEL_16407 = 'component_16407';
export function Component16407({ value = 16407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16407, 'data-value': derived.doubled }, children);
}
export default Component16407;
