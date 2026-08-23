import React from 'react';
const LABEL_34550 = 'component_34550';
export function Component34550({ value = 34550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34550, 'data-value': derived.doubled }, children);
}
export default Component34550;
