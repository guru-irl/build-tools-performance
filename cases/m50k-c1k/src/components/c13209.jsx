import React from 'react';
const LABEL_13209 = 'component_13209';
export function Component13209({ value = 13209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13209, 'data-value': derived.doubled }, children);
}
export default Component13209;
