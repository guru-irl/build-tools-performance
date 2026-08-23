import React from 'react';
const LABEL_22686 = 'component_22686';
export function Component22686({ value = 22686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22686, 'data-value': derived.doubled }, children);
}
export default Component22686;
