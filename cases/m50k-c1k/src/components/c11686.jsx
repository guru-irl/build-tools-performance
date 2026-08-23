import React from 'react';
const LABEL_11686 = 'component_11686';
export function Component11686({ value = 11686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11686, 'data-value': derived.doubled }, children);
}
export default Component11686;
