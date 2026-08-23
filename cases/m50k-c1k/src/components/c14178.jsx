import React from 'react';
const LABEL_14178 = 'component_14178';
export function Component14178({ value = 14178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14178, 'data-value': derived.doubled }, children);
}
export default Component14178;
