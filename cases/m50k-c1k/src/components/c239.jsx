import React from 'react';
const LABEL_239 = 'component_239';
export function Component239({ value = 239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_239, 'data-value': derived.doubled }, children);
}
export default Component239;
