import React from 'react';
const LABEL_231 = 'component_231';
export function Component231({ value = 231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_231, 'data-value': derived.doubled }, children);
}
export default Component231;
