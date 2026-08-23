import React from 'react';
const LABEL_34344 = 'component_34344';
export function Component34344({ value = 34344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34344, 'data-value': derived.doubled }, children);
}
export default Component34344;
