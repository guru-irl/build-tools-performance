import React from 'react';
const LABEL_26136 = 'component_26136';
export function Component26136({ value = 26136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26136, 'data-value': derived.doubled }, children);
}
export default Component26136;
