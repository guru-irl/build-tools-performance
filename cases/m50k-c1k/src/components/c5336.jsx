import React from 'react';
const LABEL_5336 = 'component_5336';
export function Component5336({ value = 5336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5336, 'data-value': derived.doubled }, children);
}
export default Component5336;
