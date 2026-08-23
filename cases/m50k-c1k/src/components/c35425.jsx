import React from 'react';
const LABEL_35425 = 'component_35425';
export function Component35425({ value = 35425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35425, 'data-value': derived.doubled }, children);
}
export default Component35425;
