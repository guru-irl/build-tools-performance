import React from 'react';
const LABEL_38723 = 'component_38723';
export function Component38723({ value = 38723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38723, 'data-value': derived.doubled }, children);
}
export default Component38723;
