import React from 'react';
const LABEL_46723 = 'component_46723';
export function Component46723({ value = 46723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46723, 'data-value': derived.doubled }, children);
}
export default Component46723;
