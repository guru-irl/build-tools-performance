import React from 'react';
const LABEL_18231 = 'component_18231';
export function Component18231({ value = 18231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18231, 'data-value': derived.doubled }, children);
}
export default Component18231;
