import React from 'react';
const LABEL_18683 = 'component_18683';
export function Component18683({ value = 18683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18683, 'data-value': derived.doubled }, children);
}
export default Component18683;
