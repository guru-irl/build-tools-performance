import React from 'react';
const LABEL_26406 = 'component_26406';
export function Component26406({ value = 26406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26406, 'data-value': derived.doubled }, children);
}
export default Component26406;
