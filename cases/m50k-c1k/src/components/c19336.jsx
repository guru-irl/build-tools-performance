import React from 'react';
const LABEL_19336 = 'component_19336';
export function Component19336({ value = 19336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19336, 'data-value': derived.doubled }, children);
}
export default Component19336;
