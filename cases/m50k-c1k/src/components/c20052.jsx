import React from 'react';
const LABEL_20052 = 'component_20052';
export function Component20052({ value = 20052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20052, 'data-value': derived.doubled }, children);
}
export default Component20052;
