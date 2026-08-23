import React from 'react';
const LABEL_29023 = 'component_29023';
export function Component29023({ value = 29023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29023, 'data-value': derived.doubled }, children);
}
export default Component29023;
