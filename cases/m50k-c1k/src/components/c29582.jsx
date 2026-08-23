import React from 'react';
const LABEL_29582 = 'component_29582';
export function Component29582({ value = 29582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29582, 'data-value': derived.doubled }, children);
}
export default Component29582;
