import React from 'react';
const LABEL_18816 = 'component_18816';
export function Component18816({ value = 18816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18816, 'data-value': derived.doubled }, children);
}
export default Component18816;
