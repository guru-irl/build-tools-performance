import React from 'react';
const LABEL_18230 = 'component_18230';
export function Component18230({ value = 18230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18230, 'data-value': derived.doubled }, children);
}
export default Component18230;
