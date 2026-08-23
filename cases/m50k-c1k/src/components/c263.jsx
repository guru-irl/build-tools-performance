import React from 'react';
const LABEL_263 = 'component_263';
export function Component263({ value = 263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_263, 'data-value': derived.doubled }, children);
}
export default Component263;
