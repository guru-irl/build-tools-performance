import React from 'react';
const LABEL_7338 = 'component_7338';
export function Component7338({ value = 7338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7338, 'data-value': derived.doubled }, children);
}
export default Component7338;
