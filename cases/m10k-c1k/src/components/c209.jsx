import React from 'react';
const LABEL_209 = 'component_209';
export function Component209({ value = 209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_209, 'data-value': derived.doubled }, children);
}
export default Component209;
