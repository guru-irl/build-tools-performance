import React from 'react';
const LABEL_41900 = 'component_41900';
export function Component41900({ value = 41900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41900, 'data-value': derived.doubled }, children);
}
export default Component41900;
