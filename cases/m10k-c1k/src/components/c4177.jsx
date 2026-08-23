import React from 'react';
const LABEL_4177 = 'component_4177';
export function Component4177({ value = 4177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4177, 'data-value': derived.doubled }, children);
}
export default Component4177;
