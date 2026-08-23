import React from 'react';
const LABEL_13704 = 'component_13704';
export function Component13704({ value = 13704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13704, 'data-value': derived.doubled }, children);
}
export default Component13704;
