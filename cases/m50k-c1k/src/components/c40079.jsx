import React from 'react';
const LABEL_40079 = 'component_40079';
export function Component40079({ value = 40079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40079, 'data-value': derived.doubled }, children);
}
export default Component40079;
