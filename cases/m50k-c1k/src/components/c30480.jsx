import React from 'react';
const LABEL_30480 = 'component_30480';
export function Component30480({ value = 30480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30480, 'data-value': derived.doubled }, children);
}
export default Component30480;
