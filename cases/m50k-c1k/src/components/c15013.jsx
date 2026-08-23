import React from 'react';
const LABEL_15013 = 'component_15013';
export function Component15013({ value = 15013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15013, 'data-value': derived.doubled }, children);
}
export default Component15013;
