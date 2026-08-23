import React from 'react';
const LABEL_18209 = 'component_18209';
export function Component18209({ value = 18209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18209, 'data-value': derived.doubled }, children);
}
export default Component18209;
