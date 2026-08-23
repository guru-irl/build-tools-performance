import React from 'react';
const LABEL_1235 = 'component_1235';
export function Component1235({ value = 1235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1235, 'data-value': derived.doubled }, children);
}
export default Component1235;
