import React from 'react';
const LABEL_19559 = 'component_19559';
export function Component19559({ value = 19559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19559, 'data-value': derived.doubled }, children);
}
export default Component19559;
