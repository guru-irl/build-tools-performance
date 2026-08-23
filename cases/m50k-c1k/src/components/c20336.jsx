import React from 'react';
const LABEL_20336 = 'component_20336';
export function Component20336({ value = 20336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20336, 'data-value': derived.doubled }, children);
}
export default Component20336;
