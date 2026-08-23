import React from 'react';
const LABEL_46155 = 'component_46155';
export function Component46155({ value = 46155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46155, 'data-value': derived.doubled }, children);
}
export default Component46155;
