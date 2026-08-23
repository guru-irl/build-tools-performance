import React from 'react';
const LABEL_11352 = 'component_11352';
export function Component11352({ value = 11352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11352, 'data-value': derived.doubled }, children);
}
export default Component11352;
