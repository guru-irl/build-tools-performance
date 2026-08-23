import React from 'react';
const LABEL_18531 = 'component_18531';
export function Component18531({ value = 18531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18531, 'data-value': derived.doubled }, children);
}
export default Component18531;
