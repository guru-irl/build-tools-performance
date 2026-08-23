import React from 'react';
const LABEL_29019 = 'component_29019';
export function Component29019({ value = 29019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29019, 'data-value': derived.doubled }, children);
}
export default Component29019;
