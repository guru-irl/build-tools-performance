import React from 'react';
const LABEL_31686 = 'component_31686';
export function Component31686({ value = 31686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31686, 'data-value': derived.doubled }, children);
}
export default Component31686;
