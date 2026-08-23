import React from 'react';
const LABEL_7604 = 'component_7604';
export function Component7604({ value = 7604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7604, 'data-value': derived.doubled }, children);
}
export default Component7604;
