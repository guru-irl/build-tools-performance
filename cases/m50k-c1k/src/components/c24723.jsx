import React from 'react';
const LABEL_24723 = 'component_24723';
export function Component24723({ value = 24723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24723, 'data-value': derived.doubled }, children);
}
export default Component24723;
