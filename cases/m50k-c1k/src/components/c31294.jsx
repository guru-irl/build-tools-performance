import React from 'react';
const LABEL_31294 = 'component_31294';
export function Component31294({ value = 31294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31294, 'data-value': derived.doubled }, children);
}
export default Component31294;
