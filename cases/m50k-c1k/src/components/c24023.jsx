import React from 'react';
const LABEL_24023 = 'component_24023';
export function Component24023({ value = 24023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24023, 'data-value': derived.doubled }, children);
}
export default Component24023;
