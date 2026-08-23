import React from 'react';
const LABEL_42325 = 'component_42325';
export function Component42325({ value = 42325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42325, 'data-value': derived.doubled }, children);
}
export default Component42325;
