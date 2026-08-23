import React from 'react';
const LABEL_18925 = 'component_18925';
export function Component18925({ value = 18925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18925, 'data-value': derived.doubled }, children);
}
export default Component18925;
