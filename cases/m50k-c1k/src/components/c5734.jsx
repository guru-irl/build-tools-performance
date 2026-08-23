import React from 'react';
const LABEL_5734 = 'component_5734';
export function Component5734({ value = 5734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5734, 'data-value': derived.doubled }, children);
}
export default Component5734;
