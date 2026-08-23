import React from 'react';
const LABEL_31723 = 'component_31723';
export function Component31723({ value = 31723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31723, 'data-value': derived.doubled }, children);
}
export default Component31723;
