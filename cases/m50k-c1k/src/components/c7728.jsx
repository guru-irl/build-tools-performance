import React from 'react';
const LABEL_7728 = 'component_7728';
export function Component7728({ value = 7728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7728, 'data-value': derived.doubled }, children);
}
export default Component7728;
