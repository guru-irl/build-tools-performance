import React from 'react';
const LABEL_4291 = 'component_4291';
export function Component4291({ value = 4291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4291, 'data-value': derived.doubled }, children);
}
export default Component4291;
