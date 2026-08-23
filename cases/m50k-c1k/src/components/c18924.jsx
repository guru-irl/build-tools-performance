import React from 'react';
const LABEL_18924 = 'component_18924';
export function Component18924({ value = 18924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18924, 'data-value': derived.doubled }, children);
}
export default Component18924;
