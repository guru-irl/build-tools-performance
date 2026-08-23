import React from 'react';
const LABEL_28449 = 'component_28449';
export function Component28449({ value = 28449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28449, 'data-value': derived.doubled }, children);
}
export default Component28449;
