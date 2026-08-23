import React from 'react';
const LABEL_31353 = 'component_31353';
export function Component31353({ value = 31353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31353, 'data-value': derived.doubled }, children);
}
export default Component31353;
