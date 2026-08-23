import React from 'react';
const LABEL_37462 = 'component_37462';
export function Component37462({ value = 37462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37462, 'data-value': derived.doubled }, children);
}
export default Component37462;
