import React from 'react';
const LABEL_36430 = 'component_36430';
export function Component36430({ value = 36430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36430, 'data-value': derived.doubled }, children);
}
export default Component36430;
