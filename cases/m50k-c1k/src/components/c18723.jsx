import React from 'react';
const LABEL_18723 = 'component_18723';
export function Component18723({ value = 18723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18723, 'data-value': derived.doubled }, children);
}
export default Component18723;
