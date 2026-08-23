import React from 'react';
const LABEL_37136 = 'component_37136';
export function Component37136({ value = 37136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37136, 'data-value': derived.doubled }, children);
}
export default Component37136;
