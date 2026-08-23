import React from 'react';
const LABEL_3367 = 'component_3367';
export function Component3367({ value = 3367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3367, 'data-value': derived.doubled }, children);
}
export default Component3367;
