import React from 'react';
const LABEL_42169 = 'component_42169';
export function Component42169({ value = 42169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42169, 'data-value': derived.doubled }, children);
}
export default Component42169;
