import React from 'react';
const LABEL_40231 = 'component_40231';
export function Component40231({ value = 40231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40231, 'data-value': derived.doubled }, children);
}
export default Component40231;
