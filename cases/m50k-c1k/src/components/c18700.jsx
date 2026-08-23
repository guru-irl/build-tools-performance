import React from 'react';
const LABEL_18700 = 'component_18700';
export function Component18700({ value = 18700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18700, 'data-value': derived.doubled }, children);
}
export default Component18700;
