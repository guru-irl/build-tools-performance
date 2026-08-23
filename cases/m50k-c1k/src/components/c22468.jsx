import React from 'react';
const LABEL_22468 = 'component_22468';
export function Component22468({ value = 22468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22468, 'data-value': derived.doubled }, children);
}
export default Component22468;
