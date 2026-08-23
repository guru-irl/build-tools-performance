import React from 'react';
const LABEL_28336 = 'component_28336';
export function Component28336({ value = 28336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28336, 'data-value': derived.doubled }, children);
}
export default Component28336;
