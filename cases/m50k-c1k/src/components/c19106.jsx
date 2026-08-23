import React from 'react';
const LABEL_19106 = 'component_19106';
export function Component19106({ value = 19106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19106, 'data-value': derived.doubled }, children);
}
export default Component19106;
