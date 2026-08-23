import React from 'react';
const LABEL_31366 = 'component_31366';
export function Component31366({ value = 31366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31366, 'data-value': derived.doubled }, children);
}
export default Component31366;
