import React from 'react';
const LABEL_13588 = 'component_13588';
export function Component13588({ value = 13588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13588, 'data-value': derived.doubled }, children);
}
export default Component13588;
