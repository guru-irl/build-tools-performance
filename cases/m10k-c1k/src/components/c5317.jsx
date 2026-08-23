import React from 'react';
const LABEL_5317 = 'component_5317';
export function Component5317({ value = 5317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5317, 'data-value': derived.doubled }, children);
}
export default Component5317;
