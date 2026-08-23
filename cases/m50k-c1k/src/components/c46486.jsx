import React from 'react';
const LABEL_46486 = 'component_46486';
export function Component46486({ value = 46486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46486, 'data-value': derived.doubled }, children);
}
export default Component46486;
