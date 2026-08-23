import React from 'react';
const LABEL_4344 = 'component_4344';
export function Component4344({ value = 4344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4344, 'data-value': derived.doubled }, children);
}
export default Component4344;
