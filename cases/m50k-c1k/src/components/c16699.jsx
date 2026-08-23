import React from 'react';
const LABEL_16699 = 'component_16699';
export function Component16699({ value = 16699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16699, 'data-value': derived.doubled }, children);
}
export default Component16699;
