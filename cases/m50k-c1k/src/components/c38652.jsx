import React from 'react';
const LABEL_38652 = 'component_38652';
export function Component38652({ value = 38652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38652, 'data-value': derived.doubled }, children);
}
export default Component38652;
