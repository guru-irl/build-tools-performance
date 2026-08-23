import React from 'react';
const LABEL_4601 = 'component_4601';
export function Component4601({ value = 4601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4601, 'data-value': derived.doubled }, children);
}
export default Component4601;
