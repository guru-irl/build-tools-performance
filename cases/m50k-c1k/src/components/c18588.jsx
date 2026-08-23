import React from 'react';
const LABEL_18588 = 'component_18588';
export function Component18588({ value = 18588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18588, 'data-value': derived.doubled }, children);
}
export default Component18588;
