import React from 'react';
const LABEL_40291 = 'component_40291';
export function Component40291({ value = 40291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40291, 'data-value': derived.doubled }, children);
}
export default Component40291;
