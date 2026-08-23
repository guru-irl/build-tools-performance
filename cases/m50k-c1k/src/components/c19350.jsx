import React from 'react';
const LABEL_19350 = 'component_19350';
export function Component19350({ value = 19350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19350, 'data-value': derived.doubled }, children);
}
export default Component19350;
