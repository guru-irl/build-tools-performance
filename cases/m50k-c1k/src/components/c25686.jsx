import React from 'react';
const LABEL_25686 = 'component_25686';
export function Component25686({ value = 25686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25686, 'data-value': derived.doubled }, children);
}
export default Component25686;
