import React from 'react';
const LABEL_18419 = 'component_18419';
export function Component18419({ value = 18419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18419, 'data-value': derived.doubled }, children);
}
export default Component18419;
