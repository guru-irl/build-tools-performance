import React from 'react';
const LABEL_42723 = 'component_42723';
export function Component42723({ value = 42723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42723, 'data-value': derived.doubled }, children);
}
export default Component42723;
