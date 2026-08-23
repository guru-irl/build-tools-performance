import React from 'react';
const LABEL_23866 = 'component_23866';
export function Component23866({ value = 23866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23866, 'data-value': derived.doubled }, children);
}
export default Component23866;
