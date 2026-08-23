import React from 'react';
const LABEL_18728 = 'component_18728';
export function Component18728({ value = 18728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18728, 'data-value': derived.doubled }, children);
}
export default Component18728;
