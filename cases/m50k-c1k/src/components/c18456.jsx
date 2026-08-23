import React from 'react';
const LABEL_18456 = 'component_18456';
export function Component18456({ value = 18456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18456, 'data-value': derived.doubled }, children);
}
export default Component18456;
