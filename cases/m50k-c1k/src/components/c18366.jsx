import React from 'react';
const LABEL_18366 = 'component_18366';
export function Component18366({ value = 18366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18366, 'data-value': derived.doubled }, children);
}
export default Component18366;
