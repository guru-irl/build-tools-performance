import React from 'react';
const LABEL_46624 = 'component_46624';
export function Component46624({ value = 46624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46624, 'data-value': derived.doubled }, children);
}
export default Component46624;
