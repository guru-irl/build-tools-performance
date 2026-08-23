import React from 'react';
const LABEL_46393 = 'component_46393';
export function Component46393({ value = 46393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46393, 'data-value': derived.doubled }, children);
}
export default Component46393;
