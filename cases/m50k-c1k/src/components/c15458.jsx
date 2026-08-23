import React from 'react';
const LABEL_15458 = 'component_15458';
export function Component15458({ value = 15458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15458, 'data-value': derived.doubled }, children);
}
export default Component15458;
