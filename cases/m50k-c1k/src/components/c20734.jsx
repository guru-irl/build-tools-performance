import React from 'react';
const LABEL_20734 = 'component_20734';
export function Component20734({ value = 20734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20734, 'data-value': derived.doubled }, children);
}
export default Component20734;
