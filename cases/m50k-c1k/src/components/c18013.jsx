import React from 'react';
const LABEL_18013 = 'component_18013';
export function Component18013({ value = 18013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18013, 'data-value': derived.doubled }, children);
}
export default Component18013;
