import React from 'react';
const LABEL_46549 = 'component_46549';
export function Component46549({ value = 46549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46549, 'data-value': derived.doubled }, children);
}
export default Component46549;
