import React from 'react';
const LABEL_38235 = 'component_38235';
export function Component38235({ value = 38235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38235, 'data-value': derived.doubled }, children);
}
export default Component38235;
