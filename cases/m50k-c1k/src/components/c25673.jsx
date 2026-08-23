import React from 'react';
const LABEL_25673 = 'component_25673';
export function Component25673({ value = 25673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25673, 'data-value': derived.doubled }, children);
}
export default Component25673;
