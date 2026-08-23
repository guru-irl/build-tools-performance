import React from 'react';
const LABEL_16263 = 'component_16263';
export function Component16263({ value = 16263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16263, 'data-value': derived.doubled }, children);
}
export default Component16263;
