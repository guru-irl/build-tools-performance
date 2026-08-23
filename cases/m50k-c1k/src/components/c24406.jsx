import React from 'react';
const LABEL_24406 = 'component_24406';
export function Component24406({ value = 24406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24406, 'data-value': derived.doubled }, children);
}
export default Component24406;
