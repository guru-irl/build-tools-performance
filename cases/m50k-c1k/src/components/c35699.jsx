import React from 'react';
const LABEL_35699 = 'component_35699';
export function Component35699({ value = 35699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35699, 'data-value': derived.doubled }, children);
}
export default Component35699;
