import React from 'react';
const LABEL_29615 = 'component_29615';
export function Component29615({ value = 29615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29615, 'data-value': derived.doubled }, children);
}
export default Component29615;
