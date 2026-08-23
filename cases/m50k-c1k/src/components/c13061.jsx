import React from 'react';
const LABEL_13061 = 'component_13061';
export function Component13061({ value = 13061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13061, 'data-value': derived.doubled }, children);
}
export default Component13061;
