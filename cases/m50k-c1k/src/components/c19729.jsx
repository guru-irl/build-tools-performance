import React from 'react';
const LABEL_19729 = 'component_19729';
export function Component19729({ value = 19729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19729, 'data-value': derived.doubled }, children);
}
export default Component19729;
