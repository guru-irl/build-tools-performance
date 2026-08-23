import React from 'react';
const LABEL_42042 = 'component_42042';
export function Component42042({ value = 42042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42042, 'data-value': derived.doubled }, children);
}
export default Component42042;
