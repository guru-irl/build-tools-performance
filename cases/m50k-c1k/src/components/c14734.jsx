import React from 'react';
const LABEL_14734 = 'component_14734';
export function Component14734({ value = 14734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14734, 'data-value': derived.doubled }, children);
}
export default Component14734;
