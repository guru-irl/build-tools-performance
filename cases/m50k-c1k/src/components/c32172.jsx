import React from 'react';
const LABEL_32172 = 'component_32172';
export function Component32172({ value = 32172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32172, 'data-value': derived.doubled }, children);
}
export default Component32172;
