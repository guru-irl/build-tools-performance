import React from 'react';
const LABEL_44298 = 'component_44298';
export function Component44298({ value = 44298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44298, 'data-value': derived.doubled }, children);
}
export default Component44298;
