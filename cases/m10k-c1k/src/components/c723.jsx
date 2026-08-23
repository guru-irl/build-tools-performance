import React from 'react';
const LABEL_723 = 'component_723';
export function Component723({ value = 723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_723, 'data-value': derived.doubled }, children);
}
export default Component723;
