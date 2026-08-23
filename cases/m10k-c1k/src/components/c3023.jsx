import React from 'react';
const LABEL_3023 = 'component_3023';
export function Component3023({ value = 3023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3023, 'data-value': derived.doubled }, children);
}
export default Component3023;
