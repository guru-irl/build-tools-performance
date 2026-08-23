import React from 'react';
const LABEL_33501 = 'component_33501';
export function Component33501({ value = 33501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33501, 'data-value': derived.doubled }, children);
}
export default Component33501;
