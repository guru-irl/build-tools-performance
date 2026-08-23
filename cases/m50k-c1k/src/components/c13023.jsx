import React from 'react';
const LABEL_13023 = 'component_13023';
export function Component13023({ value = 13023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13023, 'data-value': derived.doubled }, children);
}
export default Component13023;
