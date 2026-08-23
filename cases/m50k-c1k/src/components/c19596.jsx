import React from 'react';
const LABEL_19596 = 'component_19596';
export function Component19596({ value = 19596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19596, 'data-value': derived.doubled }, children);
}
export default Component19596;
