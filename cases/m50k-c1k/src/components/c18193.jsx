import React from 'react';
const LABEL_18193 = 'component_18193';
export function Component18193({ value = 18193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18193, 'data-value': derived.doubled }, children);
}
export default Component18193;
