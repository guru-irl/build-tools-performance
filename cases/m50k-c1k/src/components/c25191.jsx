import React from 'react';
const LABEL_25191 = 'component_25191';
export function Component25191({ value = 25191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25191, 'data-value': derived.doubled }, children);
}
export default Component25191;
