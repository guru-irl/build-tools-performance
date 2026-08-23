import React from 'react';
const LABEL_16104 = 'component_16104';
export function Component16104({ value = 16104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16104, 'data-value': derived.doubled }, children);
}
export default Component16104;
