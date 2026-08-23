import React from 'react';
const LABEL_25723 = 'component_25723';
export function Component25723({ value = 25723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25723, 'data-value': derived.doubled }, children);
}
export default Component25723;
