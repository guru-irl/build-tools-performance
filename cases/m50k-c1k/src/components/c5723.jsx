import React from 'react';
const LABEL_5723 = 'component_5723';
export function Component5723({ value = 5723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5723, 'data-value': derived.doubled }, children);
}
export default Component5723;
