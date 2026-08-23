import React from 'react';
const LABEL_13215 = 'component_13215';
export function Component13215({ value = 13215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13215, 'data-value': derived.doubled }, children);
}
export default Component13215;
