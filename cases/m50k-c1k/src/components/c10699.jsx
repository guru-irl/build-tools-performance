import React from 'react';
const LABEL_10699 = 'component_10699';
export function Component10699({ value = 10699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10699, 'data-value': derived.doubled }, children);
}
export default Component10699;
