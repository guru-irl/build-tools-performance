import React from 'react';
const LABEL_39186 = 'component_39186';
export function Component39186({ value = 39186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39186, 'data-value': derived.doubled }, children);
}
export default Component39186;
