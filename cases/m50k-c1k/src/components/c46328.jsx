import React from 'react';
const LABEL_46328 = 'component_46328';
export function Component46328({ value = 46328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46328, 'data-value': derived.doubled }, children);
}
export default Component46328;
