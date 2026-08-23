import React from 'react';
const LABEL_177 = 'component_177';
export function Component177({ value = 177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_177, 'data-value': derived.doubled }, children);
}
export default Component177;
