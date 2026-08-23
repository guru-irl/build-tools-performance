import React from 'react';
const LABEL_44024 = 'component_44024';
export function Component44024({ value = 44024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44024, 'data-value': derived.doubled }, children);
}
export default Component44024;
