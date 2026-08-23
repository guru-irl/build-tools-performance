import React from 'react';
const LABEL_5601 = 'component_5601';
export function Component5601({ value = 5601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5601, 'data-value': derived.doubled }, children);
}
export default Component5601;
