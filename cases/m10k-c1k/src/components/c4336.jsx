import React from 'react';
const LABEL_4336 = 'component_4336';
export function Component4336({ value = 4336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4336, 'data-value': derived.doubled }, children);
}
export default Component4336;
