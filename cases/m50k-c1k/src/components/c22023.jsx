import React from 'react';
const LABEL_22023 = 'component_22023';
export function Component22023({ value = 22023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22023, 'data-value': derived.doubled }, children);
}
export default Component22023;
