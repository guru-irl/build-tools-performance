import React from 'react';
const LABEL_14130 = 'component_14130';
export function Component14130({ value = 14130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14130, 'data-value': derived.doubled }, children);
}
export default Component14130;
