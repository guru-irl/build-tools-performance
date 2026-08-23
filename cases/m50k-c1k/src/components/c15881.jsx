import React from 'react';
const LABEL_15881 = 'component_15881';
export function Component15881({ value = 15881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15881, 'data-value': derived.doubled }, children);
}
export default Component15881;
