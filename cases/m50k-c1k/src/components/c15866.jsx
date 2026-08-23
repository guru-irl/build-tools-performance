import React from 'react';
const LABEL_15866 = 'component_15866';
export function Component15866({ value = 15866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15866, 'data-value': derived.doubled }, children);
}
export default Component15866;
