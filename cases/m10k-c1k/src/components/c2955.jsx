import React from 'react';
const LABEL_2955 = 'component_2955';
export function Component2955({ value = 2955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2955, 'data-value': derived.doubled }, children);
}
export default Component2955;
