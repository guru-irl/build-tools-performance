import React from 'react';
const LABEL_24130 = 'component_24130';
export function Component24130({ value = 24130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24130, 'data-value': derived.doubled }, children);
}
export default Component24130;
