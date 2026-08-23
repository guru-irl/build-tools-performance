import React from 'react';
const LABEL_18194 = 'component_18194';
export function Component18194({ value = 18194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18194, 'data-value': derived.doubled }, children);
}
export default Component18194;
