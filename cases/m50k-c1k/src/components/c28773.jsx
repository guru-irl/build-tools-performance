import React from 'react';
const LABEL_28773 = 'component_28773';
export function Component28773({ value = 28773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28773, 'data-value': derived.doubled }, children);
}
export default Component28773;
