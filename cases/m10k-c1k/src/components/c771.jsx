import React from 'react';
const LABEL_771 = 'component_771';
export function Component771({ value = 771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_771, 'data-value': derived.doubled }, children);
}
export default Component771;
