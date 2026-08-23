import React from 'react';
const LABEL_22723 = 'component_22723';
export function Component22723({ value = 22723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22723, 'data-value': derived.doubled }, children);
}
export default Component22723;
