import React from 'react';
const LABEL_41569 = 'component_41569';
export function Component41569({ value = 41569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41569, 'data-value': derived.doubled }, children);
}
export default Component41569;
