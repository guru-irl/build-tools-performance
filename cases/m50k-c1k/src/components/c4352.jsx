import React from 'react';
const LABEL_4352 = 'component_4352';
export function Component4352({ value = 4352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4352, 'data-value': derived.doubled }, children);
}
export default Component4352;
