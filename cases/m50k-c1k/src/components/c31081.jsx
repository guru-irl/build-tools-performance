import React from 'react';
const LABEL_31081 = 'component_31081';
export function Component31081({ value = 31081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31081, 'data-value': derived.doubled }, children);
}
export default Component31081;
