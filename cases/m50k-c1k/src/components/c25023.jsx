import React from 'react';
const LABEL_25023 = 'component_25023';
export function Component25023({ value = 25023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25023, 'data-value': derived.doubled }, children);
}
export default Component25023;
