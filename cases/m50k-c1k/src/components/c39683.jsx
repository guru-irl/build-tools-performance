import React from 'react';
const LABEL_39683 = 'component_39683';
export function Component39683({ value = 39683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39683, 'data-value': derived.doubled }, children);
}
export default Component39683;
