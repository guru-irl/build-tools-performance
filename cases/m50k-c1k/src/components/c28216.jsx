import React from 'react';
const LABEL_28216 = 'component_28216';
export function Component28216({ value = 28216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28216, 'data-value': derived.doubled }, children);
}
export default Component28216;
