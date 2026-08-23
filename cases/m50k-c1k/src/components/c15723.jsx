import React from 'react';
const LABEL_15723 = 'component_15723';
export function Component15723({ value = 15723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15723, 'data-value': derived.doubled }, children);
}
export default Component15723;
