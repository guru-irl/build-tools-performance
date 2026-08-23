import React from 'react';
const LABEL_18232 = 'component_18232';
export function Component18232({ value = 18232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18232, 'data-value': derived.doubled }, children);
}
export default Component18232;
