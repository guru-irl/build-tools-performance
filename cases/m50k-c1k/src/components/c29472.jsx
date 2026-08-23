import React from 'react';
const LABEL_29472 = 'component_29472';
export function Component29472({ value = 29472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29472, 'data-value': derived.doubled }, children);
}
export default Component29472;
