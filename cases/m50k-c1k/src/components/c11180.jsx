import React from 'react';
const LABEL_11180 = 'component_11180';
export function Component11180({ value = 11180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11180, 'data-value': derived.doubled }, children);
}
export default Component11180;
