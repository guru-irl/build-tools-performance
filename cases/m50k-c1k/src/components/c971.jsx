import React from 'react';
const LABEL_971 = 'component_971';
export function Component971({ value = 971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_971, 'data-value': derived.doubled }, children);
}
export default Component971;
