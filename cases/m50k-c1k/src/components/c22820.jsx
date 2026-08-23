import React from 'react';
const LABEL_22820 = 'component_22820';
export function Component22820({ value = 22820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22820, 'data-value': derived.doubled }, children);
}
export default Component22820;
