import React from 'react';
const LABEL_5016 = 'component_5016';
export function Component5016({ value = 5016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5016, 'data-value': derived.doubled }, children);
}
export default Component5016;
