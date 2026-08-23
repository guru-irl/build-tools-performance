import React from 'react';
const LABEL_5472 = 'component_5472';
export function Component5472({ value = 5472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5472, 'data-value': derived.doubled }, children);
}
export default Component5472;
