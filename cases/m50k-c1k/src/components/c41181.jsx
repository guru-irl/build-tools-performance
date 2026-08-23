import React from 'react';
const LABEL_41181 = 'component_41181';
export function Component41181({ value = 41181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41181, 'data-value': derived.doubled }, children);
}
export default Component41181;
