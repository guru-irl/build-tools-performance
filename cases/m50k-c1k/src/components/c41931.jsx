import React from 'react';
const LABEL_41931 = 'component_41931';
export function Component41931({ value = 41931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41931, 'data-value': derived.doubled }, children);
}
export default Component41931;
