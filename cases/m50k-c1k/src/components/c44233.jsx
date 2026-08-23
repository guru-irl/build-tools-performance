import React from 'react';
const LABEL_44233 = 'component_44233';
export function Component44233({ value = 44233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44233, 'data-value': derived.doubled }, children);
}
export default Component44233;
