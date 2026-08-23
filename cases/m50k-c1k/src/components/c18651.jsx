import React from 'react';
const LABEL_18651 = 'component_18651';
export function Component18651({ value = 18651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18651, 'data-value': derived.doubled }, children);
}
export default Component18651;
