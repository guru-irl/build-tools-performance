import React from 'react';
const LABEL_16472 = 'component_16472';
export function Component16472({ value = 16472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16472, 'data-value': derived.doubled }, children);
}
export default Component16472;
