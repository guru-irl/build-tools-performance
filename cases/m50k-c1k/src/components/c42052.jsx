import React from 'react';
const LABEL_42052 = 'component_42052';
export function Component42052({ value = 42052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42052, 'data-value': derived.doubled }, children);
}
export default Component42052;
