import React from 'react';
const LABEL_31773 = 'component_31773';
export function Component31773({ value = 31773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31773, 'data-value': derived.doubled }, children);
}
export default Component31773;
