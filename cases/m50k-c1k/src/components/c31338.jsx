import React from 'react';
const LABEL_31338 = 'component_31338';
export function Component31338({ value = 31338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31338, 'data-value': derived.doubled }, children);
}
export default Component31338;
