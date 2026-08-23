import React from 'react';
const LABEL_39140 = 'component_39140';
export function Component39140({ value = 39140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39140, 'data-value': derived.doubled }, children);
}
export default Component39140;
