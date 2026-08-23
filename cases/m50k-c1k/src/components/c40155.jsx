import React from 'react';
const LABEL_40155 = 'component_40155';
export function Component40155({ value = 40155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40155, 'data-value': derived.doubled }, children);
}
export default Component40155;
