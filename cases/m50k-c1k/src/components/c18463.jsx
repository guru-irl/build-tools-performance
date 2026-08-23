import React from 'react';
const LABEL_18463 = 'component_18463';
export function Component18463({ value = 18463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18463, 'data-value': derived.doubled }, children);
}
export default Component18463;
