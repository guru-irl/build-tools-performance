import React from 'react';
const LABEL_18659 = 'component_18659';
export function Component18659({ value = 18659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18659, 'data-value': derived.doubled }, children);
}
export default Component18659;
