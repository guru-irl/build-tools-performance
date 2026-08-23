import React from 'react';
const LABEL_15628 = 'component_15628';
export function Component15628({ value = 15628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15628, 'data-value': derived.doubled }, children);
}
export default Component15628;
