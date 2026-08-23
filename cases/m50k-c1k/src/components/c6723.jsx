import React from 'react';
const LABEL_6723 = 'component_6723';
export function Component6723({ value = 6723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6723, 'data-value': derived.doubled }, children);
}
export default Component6723;
