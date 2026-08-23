import React from 'react';
const LABEL_8166 = 'component_8166';
export function Component8166({ value = 8166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8166, 'data-value': derived.doubled }, children);
}
export default Component8166;
