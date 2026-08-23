import React from 'react';
const LABEL_26 = 'component_26';
export function Component26({ value = 26, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26, 'data-value': derived.doubled }, children);
}
export default Component26;
