import React from 'react';
const LABEL_35023 = 'component_35023';
export function Component35023({ value = 35023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35023, 'data-value': derived.doubled }, children);
}
export default Component35023;
