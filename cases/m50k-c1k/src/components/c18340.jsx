import React from 'react';
const LABEL_18340 = 'component_18340';
export function Component18340({ value = 18340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18340, 'data-value': derived.doubled }, children);
}
export default Component18340;
