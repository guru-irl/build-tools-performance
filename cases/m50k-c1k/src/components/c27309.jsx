import React from 'react';
const LABEL_27309 = 'component_27309';
export function Component27309({ value = 27309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27309, 'data-value': derived.doubled }, children);
}
export default Component27309;
