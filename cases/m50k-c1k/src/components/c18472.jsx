import React from 'react';
const LABEL_18472 = 'component_18472';
export function Component18472({ value = 18472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18472, 'data-value': derived.doubled }, children);
}
export default Component18472;
