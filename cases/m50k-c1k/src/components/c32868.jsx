import React from 'react';
const LABEL_32868 = 'component_32868';
export function Component32868({ value = 32868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32868, 'data-value': derived.doubled }, children);
}
export default Component32868;
