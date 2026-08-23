import React from 'react';
const LABEL_4472 = 'component_4472';
export function Component4472({ value = 4472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4472, 'data-value': derived.doubled }, children);
}
export default Component4472;
