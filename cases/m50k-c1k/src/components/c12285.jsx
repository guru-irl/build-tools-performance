import React from 'react';
const LABEL_12285 = 'component_12285';
export function Component12285({ value = 12285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12285, 'data-value': derived.doubled }, children);
}
export default Component12285;
