import React from 'react';
const LABEL_28023 = 'component_28023';
export function Component28023({ value = 28023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28023, 'data-value': derived.doubled }, children);
}
export default Component28023;
