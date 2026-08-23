import React from 'react';
const LABEL_42344 = 'component_42344';
export function Component42344({ value = 42344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42344, 'data-value': derived.doubled }, children);
}
export default Component42344;
