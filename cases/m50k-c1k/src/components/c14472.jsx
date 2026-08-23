import React from 'react';
const LABEL_14472 = 'component_14472';
export function Component14472({ value = 14472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14472, 'data-value': derived.doubled }, children);
}
export default Component14472;
