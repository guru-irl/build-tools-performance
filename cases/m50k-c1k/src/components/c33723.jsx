import React from 'react';
const LABEL_33723 = 'component_33723';
export function Component33723({ value = 33723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33723, 'data-value': derived.doubled }, children);
}
export default Component33723;
