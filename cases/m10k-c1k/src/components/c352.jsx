import React from 'react';
const LABEL_352 = 'component_352';
export function Component352({ value = 352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_352, 'data-value': derived.doubled }, children);
}
export default Component352;
