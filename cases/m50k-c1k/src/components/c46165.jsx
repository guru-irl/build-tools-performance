import React from 'react';
const LABEL_46165 = 'component_46165';
export function Component46165({ value = 46165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46165, 'data-value': derived.doubled }, children);
}
export default Component46165;
