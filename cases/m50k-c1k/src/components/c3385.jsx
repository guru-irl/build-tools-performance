import React from 'react';
const LABEL_3385 = 'component_3385';
export function Component3385({ value = 3385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3385, 'data-value': derived.doubled }, children);
}
export default Component3385;
