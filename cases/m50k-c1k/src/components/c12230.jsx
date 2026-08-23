import React from 'react';
const LABEL_12230 = 'component_12230';
export function Component12230({ value = 12230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12230, 'data-value': derived.doubled }, children);
}
export default Component12230;
