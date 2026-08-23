import React from 'react';
const LABEL_15019 = 'component_15019';
export function Component15019({ value = 15019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15019, 'data-value': derived.doubled }, children);
}
export default Component15019;
