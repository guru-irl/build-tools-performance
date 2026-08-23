import React from 'react';
const LABEL_29461 = 'component_29461';
export function Component29461({ value = 29461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29461, 'data-value': derived.doubled }, children);
}
export default Component29461;
