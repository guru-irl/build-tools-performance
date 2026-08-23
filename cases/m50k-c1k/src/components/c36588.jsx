import React from 'react';
const LABEL_36588 = 'component_36588';
export function Component36588({ value = 36588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36588, 'data-value': derived.doubled }, children);
}
export default Component36588;
