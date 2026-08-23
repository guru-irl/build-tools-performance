import React from 'react';
const LABEL_25998 = 'component_25998';
export function Component25998({ value = 25998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25998, 'data-value': derived.doubled }, children);
}
export default Component25998;
