import React from 'react';
const LABEL_13172 = 'component_13172';
export function Component13172({ value = 13172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13172, 'data-value': derived.doubled }, children);
}
export default Component13172;
