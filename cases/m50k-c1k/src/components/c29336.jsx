import React from 'react';
const LABEL_29336 = 'component_29336';
export function Component29336({ value = 29336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29336, 'data-value': derived.doubled }, children);
}
export default Component29336;
