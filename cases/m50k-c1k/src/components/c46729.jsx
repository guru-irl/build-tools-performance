import React from 'react';
const LABEL_46729 = 'component_46729';
export function Component46729({ value = 46729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46729, 'data-value': derived.doubled }, children);
}
export default Component46729;
