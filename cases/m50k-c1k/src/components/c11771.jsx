import React from 'react';
const LABEL_11771 = 'component_11771';
export function Component11771({ value = 11771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11771, 'data-value': derived.doubled }, children);
}
export default Component11771;
