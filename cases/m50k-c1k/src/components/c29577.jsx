import React from 'react';
const LABEL_29577 = 'component_29577';
export function Component29577({ value = 29577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29577, 'data-value': derived.doubled }, children);
}
export default Component29577;
