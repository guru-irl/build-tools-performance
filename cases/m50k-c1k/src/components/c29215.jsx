import React from 'react';
const LABEL_29215 = 'component_29215';
export function Component29215({ value = 29215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29215, 'data-value': derived.doubled }, children);
}
export default Component29215;
