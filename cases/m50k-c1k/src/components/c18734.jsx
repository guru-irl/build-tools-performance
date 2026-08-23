import React from 'react';
const LABEL_18734 = 'component_18734';
export function Component18734({ value = 18734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18734, 'data-value': derived.doubled }, children);
}
export default Component18734;
