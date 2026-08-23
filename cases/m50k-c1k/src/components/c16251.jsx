import React from 'react';
const LABEL_16251 = 'component_16251';
export function Component16251({ value = 16251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16251, 'data-value': derived.doubled }, children);
}
export default Component16251;
