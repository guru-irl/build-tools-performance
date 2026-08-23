import React from 'react';
const LABEL_10023 = 'component_10023';
export function Component10023({ value = 10023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10023, 'data-value': derived.doubled }, children);
}
export default Component10023;
