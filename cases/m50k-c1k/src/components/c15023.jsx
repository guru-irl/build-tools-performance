import React from 'react';
const LABEL_15023 = 'component_15023';
export function Component15023({ value = 15023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15023, 'data-value': derived.doubled }, children);
}
export default Component15023;
