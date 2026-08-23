import React from 'react';
const LABEL_25501 = 'component_25501';
export function Component25501({ value = 25501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25501, 'data-value': derived.doubled }, children);
}
export default Component25501;
