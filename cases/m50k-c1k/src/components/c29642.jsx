import React from 'react';
const LABEL_29642 = 'component_29642';
export function Component29642({ value = 29642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29642, 'data-value': derived.doubled }, children);
}
export default Component29642;
