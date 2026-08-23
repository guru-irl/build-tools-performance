import React from 'react';
const LABEL_10338 = 'component_10338';
export function Component10338({ value = 10338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10338, 'data-value': derived.doubled }, children);
}
export default Component10338;
