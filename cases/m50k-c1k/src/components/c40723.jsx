import React from 'react';
const LABEL_40723 = 'component_40723';
export function Component40723({ value = 40723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40723, 'data-value': derived.doubled }, children);
}
export default Component40723;
