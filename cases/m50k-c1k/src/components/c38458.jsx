import React from 'react';
const LABEL_38458 = 'component_38458';
export function Component38458({ value = 38458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38458, 'data-value': derived.doubled }, children);
}
export default Component38458;
