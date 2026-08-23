import React from 'react';
const LABEL_16689 = 'component_16689';
export function Component16689({ value = 16689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16689, 'data-value': derived.doubled }, children);
}
export default Component16689;
