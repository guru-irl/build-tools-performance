import React from 'react';
const LABEL_15088 = 'component_15088';
export function Component15088({ value = 15088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15088, 'data-value': derived.doubled }, children);
}
export default Component15088;
