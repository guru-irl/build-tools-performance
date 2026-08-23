import React from 'react';
const LABEL_16070 = 'component_16070';
export function Component16070({ value = 16070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16070, 'data-value': derived.doubled }, children);
}
export default Component16070;
