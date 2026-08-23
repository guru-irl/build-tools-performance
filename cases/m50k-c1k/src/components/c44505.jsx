import React from 'react';
const LABEL_44505 = 'component_44505';
export function Component44505({ value = 44505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44505, 'data-value': derived.doubled }, children);
}
export default Component44505;
