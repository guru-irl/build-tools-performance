import React from 'react';
const LABEL_7105 = 'component_7105';
export function Component7105({ value = 7105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7105, 'data-value': derived.doubled }, children);
}
export default Component7105;
