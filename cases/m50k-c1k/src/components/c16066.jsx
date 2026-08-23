import React from 'react';
const LABEL_16066 = 'component_16066';
export function Component16066({ value = 16066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16066, 'data-value': derived.doubled }, children);
}
export default Component16066;
