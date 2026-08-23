import React from 'react';
const LABEL_16773 = 'component_16773';
export function Component16773({ value = 16773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16773, 'data-value': derived.doubled }, children);
}
export default Component16773;
