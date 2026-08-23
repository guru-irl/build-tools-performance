import React from 'react';
const LABEL_24691 = 'component_24691';
export function Component24691({ value = 24691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24691, 'data-value': derived.doubled }, children);
}
export default Component24691;
