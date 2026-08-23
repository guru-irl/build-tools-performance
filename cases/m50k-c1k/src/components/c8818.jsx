import React from 'react';
const LABEL_8818 = 'component_8818';
export function Component8818({ value = 8818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8818, 'data-value': derived.doubled }, children);
}
export default Component8818;
