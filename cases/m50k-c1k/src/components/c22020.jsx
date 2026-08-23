import React from 'react';
const LABEL_22020 = 'component_22020';
export function Component22020({ value = 22020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22020, 'data-value': derived.doubled }, children);
}
export default Component22020;
