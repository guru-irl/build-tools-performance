import React from 'react';
const LABEL_26410 = 'component_26410';
export function Component26410({ value = 26410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26410, 'data-value': derived.doubled }, children);
}
export default Component26410;
