import React from 'react';
const LABEL_34410 = 'component_34410';
export function Component34410({ value = 34410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34410, 'data-value': derived.doubled }, children);
}
export default Component34410;
