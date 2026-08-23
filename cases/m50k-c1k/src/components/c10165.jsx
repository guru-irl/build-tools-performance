import React from 'react';
const LABEL_10165 = 'component_10165';
export function Component10165({ value = 10165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10165, 'data-value': derived.doubled }, children);
}
export default Component10165;
