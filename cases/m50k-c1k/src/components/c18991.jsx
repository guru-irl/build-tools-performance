import React from 'react';
const LABEL_18991 = 'component_18991';
export function Component18991({ value = 18991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18991, 'data-value': derived.doubled }, children);
}
export default Component18991;
