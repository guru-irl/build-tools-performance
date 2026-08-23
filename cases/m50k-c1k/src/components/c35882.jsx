import React from 'react';
const LABEL_35882 = 'component_35882';
export function Component35882({ value = 35882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35882, 'data-value': derived.doubled }, children);
}
export default Component35882;
