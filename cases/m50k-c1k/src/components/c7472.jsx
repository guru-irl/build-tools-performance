import React from 'react';
const LABEL_7472 = 'component_7472';
export function Component7472({ value = 7472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7472, 'data-value': derived.doubled }, children);
}
export default Component7472;
