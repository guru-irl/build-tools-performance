import React from 'react';
const LABEL_13196 = 'component_13196';
export function Component13196({ value = 13196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13196, 'data-value': derived.doubled }, children);
}
export default Component13196;
