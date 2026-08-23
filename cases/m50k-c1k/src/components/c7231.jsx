import React from 'react';
const LABEL_7231 = 'component_7231';
export function Component7231({ value = 7231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7231, 'data-value': derived.doubled }, children);
}
export default Component7231;
