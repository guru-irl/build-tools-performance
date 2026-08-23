import React from 'react';
const LABEL_24923 = 'component_24923';
export function Component24923({ value = 24923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24923, 'data-value': derived.doubled }, children);
}
export default Component24923;
