import React from 'react';
const LABEL_39579 = 'component_39579';
export function Component39579({ value = 39579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39579, 'data-value': derived.doubled }, children);
}
export default Component39579;
