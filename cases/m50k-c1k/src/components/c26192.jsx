import React from 'react';
const LABEL_26192 = 'component_26192';
export function Component26192({ value = 26192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26192, 'data-value': derived.doubled }, children);
}
export default Component26192;
