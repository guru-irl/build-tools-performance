import React from 'react';
const LABEL_42850 = 'component_42850';
export function Component42850({ value = 42850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42850, 'data-value': derived.doubled }, children);
}
export default Component42850;
