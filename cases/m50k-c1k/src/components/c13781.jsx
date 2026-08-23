import React from 'react';
const LABEL_13781 = 'component_13781';
export function Component13781({ value = 13781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13781, 'data-value': derived.doubled }, children);
}
export default Component13781;
