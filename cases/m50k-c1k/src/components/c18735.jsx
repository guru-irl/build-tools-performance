import React from 'react';
const LABEL_18735 = 'component_18735';
export function Component18735({ value = 18735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18735, 'data-value': derived.doubled }, children);
}
export default Component18735;
