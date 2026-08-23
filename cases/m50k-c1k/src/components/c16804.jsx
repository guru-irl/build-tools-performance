import React from 'react';
const LABEL_16804 = 'component_16804';
export function Component16804({ value = 16804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16804, 'data-value': derived.doubled }, children);
}
export default Component16804;
