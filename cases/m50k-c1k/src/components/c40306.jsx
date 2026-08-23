import React from 'react';
const LABEL_40306 = 'component_40306';
export function Component40306({ value = 40306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40306, 'data-value': derived.doubled }, children);
}
export default Component40306;
