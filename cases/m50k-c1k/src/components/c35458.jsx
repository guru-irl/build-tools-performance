import React from 'react';
const LABEL_35458 = 'component_35458';
export function Component35458({ value = 35458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35458, 'data-value': derived.doubled }, children);
}
export default Component35458;
