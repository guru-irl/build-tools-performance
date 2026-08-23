import React from 'react';
const LABEL_36723 = 'component_36723';
export function Component36723({ value = 36723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36723, 'data-value': derived.doubled }, children);
}
export default Component36723;
