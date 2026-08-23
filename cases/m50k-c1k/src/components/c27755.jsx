import React from 'react';
const LABEL_27755 = 'component_27755';
export function Component27755({ value = 27755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27755, 'data-value': derived.doubled }, children);
}
export default Component27755;
