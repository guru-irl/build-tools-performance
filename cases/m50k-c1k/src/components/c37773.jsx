import React from 'react';
const LABEL_37773 = 'component_37773';
export function Component37773({ value = 37773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37773, 'data-value': derived.doubled }, children);
}
export default Component37773;
