import React from 'react';
const LABEL_28723 = 'component_28723';
export function Component28723({ value = 28723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28723, 'data-value': derived.doubled }, children);
}
export default Component28723;
