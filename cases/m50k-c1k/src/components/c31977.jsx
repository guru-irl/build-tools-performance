import React from 'react';
const LABEL_31977 = 'component_31977';
export function Component31977({ value = 31977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31977, 'data-value': derived.doubled }, children);
}
export default Component31977;
