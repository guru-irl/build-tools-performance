import React from 'react';
const LABEL_42049 = 'component_42049';
export function Component42049({ value = 42049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42049, 'data-value': derived.doubled }, children);
}
export default Component42049;
