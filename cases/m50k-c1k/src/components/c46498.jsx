import React from 'react';
const LABEL_46498 = 'component_46498';
export function Component46498({ value = 46498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46498, 'data-value': derived.doubled }, children);
}
export default Component46498;
