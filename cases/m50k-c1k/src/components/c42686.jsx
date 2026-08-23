import React from 'react';
const LABEL_42686 = 'component_42686';
export function Component42686({ value = 42686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42686, 'data-value': derived.doubled }, children);
}
export default Component42686;
