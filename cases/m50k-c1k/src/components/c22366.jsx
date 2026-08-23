import React from 'react';
const LABEL_22366 = 'component_22366';
export function Component22366({ value = 22366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22366, 'data-value': derived.doubled }, children);
}
export default Component22366;
