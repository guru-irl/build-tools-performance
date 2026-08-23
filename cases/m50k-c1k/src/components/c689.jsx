import React from 'react';
const LABEL_689 = 'component_689';
export function Component689({ value = 689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_689, 'data-value': derived.doubled }, children);
}
export default Component689;
