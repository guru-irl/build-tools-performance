import React from 'react';
const LABEL_25602 = 'component_25602';
export function Component25602({ value = 25602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25602, 'data-value': derived.doubled }, children);
}
export default Component25602;
