import React from 'react';
const LABEL_34325 = 'component_34325';
export function Component34325({ value = 34325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34325, 'data-value': derived.doubled }, children);
}
export default Component34325;
