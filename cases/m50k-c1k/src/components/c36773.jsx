import React from 'react';
const LABEL_36773 = 'component_36773';
export function Component36773({ value = 36773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36773, 'data-value': derived.doubled }, children);
}
export default Component36773;
