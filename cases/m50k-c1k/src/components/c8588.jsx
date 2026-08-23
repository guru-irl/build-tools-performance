import React from 'react';
const LABEL_8588 = 'component_8588';
export function Component8588({ value = 8588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8588, 'data-value': derived.doubled }, children);
}
export default Component8588;
