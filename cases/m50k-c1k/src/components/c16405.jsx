import React from 'react';
const LABEL_16405 = 'component_16405';
export function Component16405({ value = 16405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16405, 'data-value': derived.doubled }, children);
}
export default Component16405;
