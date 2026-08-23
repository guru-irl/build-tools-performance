import React from 'react';
const LABEL_24651 = 'component_24651';
export function Component24651({ value = 24651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24651, 'data-value': derived.doubled }, children);
}
export default Component24651;
