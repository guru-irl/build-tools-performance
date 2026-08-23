import React from 'react';
const LABEL_7307 = 'component_7307';
export function Component7307({ value = 7307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7307, 'data-value': derived.doubled }, children);
}
export default Component7307;
