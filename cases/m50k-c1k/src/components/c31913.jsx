import React from 'react';
const LABEL_31913 = 'component_31913';
export function Component31913({ value = 31913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31913, 'data-value': derived.doubled }, children);
}
export default Component31913;
