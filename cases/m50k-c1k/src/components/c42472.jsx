import React from 'react';
const LABEL_42472 = 'component_42472';
export function Component42472({ value = 42472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42472, 'data-value': derived.doubled }, children);
}
export default Component42472;
