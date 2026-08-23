import React from 'react';
const LABEL_14604 = 'component_14604';
export function Component14604({ value = 14604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14604, 'data-value': derived.doubled }, children);
}
export default Component14604;
