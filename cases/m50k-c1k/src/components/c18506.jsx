import React from 'react';
const LABEL_18506 = 'component_18506';
export function Component18506({ value = 18506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18506, 'data-value': derived.doubled }, children);
}
export default Component18506;
