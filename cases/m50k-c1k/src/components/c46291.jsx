import React from 'react';
const LABEL_46291 = 'component_46291';
export function Component46291({ value = 46291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46291, 'data-value': derived.doubled }, children);
}
export default Component46291;
