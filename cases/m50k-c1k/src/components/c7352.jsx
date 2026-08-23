import React from 'react';
const LABEL_7352 = 'component_7352';
export function Component7352({ value = 7352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7352, 'data-value': derived.doubled }, children);
}
export default Component7352;
