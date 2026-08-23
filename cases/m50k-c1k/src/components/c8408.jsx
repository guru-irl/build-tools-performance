import React from 'react';
const LABEL_8408 = 'component_8408';
export function Component8408({ value = 8408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8408, 'data-value': derived.doubled }, children);
}
export default Component8408;
