import React from 'react';
const LABEL_42505 = 'component_42505';
export function Component42505({ value = 42505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42505, 'data-value': derived.doubled }, children);
}
export default Component42505;
