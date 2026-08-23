import React from 'react';
const LABEL_16991 = 'component_16991';
export function Component16991({ value = 16991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16991, 'data-value': derived.doubled }, children);
}
export default Component16991;
