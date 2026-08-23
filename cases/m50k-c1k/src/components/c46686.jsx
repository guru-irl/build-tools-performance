import React from 'react';
const LABEL_46686 = 'component_46686';
export function Component46686({ value = 46686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46686, 'data-value': derived.doubled }, children);
}
export default Component46686;
