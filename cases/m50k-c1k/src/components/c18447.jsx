import React from 'react';
const LABEL_18447 = 'component_18447';
export function Component18447({ value = 18447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18447, 'data-value': derived.doubled }, children);
}
export default Component18447;
