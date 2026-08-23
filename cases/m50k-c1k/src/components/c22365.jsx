import React from 'react';
const LABEL_22365 = 'component_22365';
export function Component22365({ value = 22365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22365, 'data-value': derived.doubled }, children);
}
export default Component22365;
