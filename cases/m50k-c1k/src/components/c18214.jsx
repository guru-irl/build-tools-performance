import React from 'react';
const LABEL_18214 = 'component_18214';
export function Component18214({ value = 18214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18214, 'data-value': derived.doubled }, children);
}
export default Component18214;
