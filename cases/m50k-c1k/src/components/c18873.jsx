import React from 'react';
const LABEL_18873 = 'component_18873';
export function Component18873({ value = 18873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18873, 'data-value': derived.doubled }, children);
}
export default Component18873;
