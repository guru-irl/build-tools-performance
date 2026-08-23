import React from 'react';
const LABEL_729 = 'component_729';
export function Component729({ value = 729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_729, 'data-value': derived.doubled }, children);
}
export default Component729;
