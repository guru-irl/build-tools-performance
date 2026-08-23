import React from 'react';
const LABEL_16415 = 'component_16415';
export function Component16415({ value = 16415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16415, 'data-value': derived.doubled }, children);
}
export default Component16415;
