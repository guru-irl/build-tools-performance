import React from 'react';
const LABEL_5735 = 'component_5735';
export function Component5735({ value = 5735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5735, 'data-value': derived.doubled }, children);
}
export default Component5735;
