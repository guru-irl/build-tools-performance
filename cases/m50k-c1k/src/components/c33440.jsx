import React from 'react';
const LABEL_33440 = 'component_33440';
export function Component33440({ value = 33440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33440, 'data-value': derived.doubled }, children);
}
export default Component33440;
