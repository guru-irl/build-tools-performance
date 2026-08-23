import React from 'react';
const LABEL_16381 = 'component_16381';
export function Component16381({ value = 16381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16381, 'data-value': derived.doubled }, children);
}
export default Component16381;
