import React from 'react';
const LABEL_15349 = 'component_15349';
export function Component15349({ value = 15349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15349, 'data-value': derived.doubled }, children);
}
export default Component15349;
