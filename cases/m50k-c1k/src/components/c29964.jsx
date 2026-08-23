import React from 'react';
const LABEL_29964 = 'component_29964';
export function Component29964({ value = 29964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29964, 'data-value': derived.doubled }, children);
}
export default Component29964;
