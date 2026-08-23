import React from 'react';
const LABEL_46431 = 'component_46431';
export function Component46431({ value = 46431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46431, 'data-value': derived.doubled }, children);
}
export default Component46431;
