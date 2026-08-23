import React from 'react';
const LABEL_40481 = 'component_40481';
export function Component40481({ value = 40481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40481, 'data-value': derived.doubled }, children);
}
export default Component40481;
