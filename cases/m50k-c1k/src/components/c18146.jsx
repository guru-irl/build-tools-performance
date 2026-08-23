import React from 'react';
const LABEL_18146 = 'component_18146';
export function Component18146({ value = 18146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18146, 'data-value': derived.doubled }, children);
}
export default Component18146;
