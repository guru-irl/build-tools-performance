import React from 'react';
const LABEL_24285 = 'component_24285';
export function Component24285({ value = 24285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24285, 'data-value': derived.doubled }, children);
}
export default Component24285;
