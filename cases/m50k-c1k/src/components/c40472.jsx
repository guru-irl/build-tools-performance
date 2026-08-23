import React from 'react';
const LABEL_40472 = 'component_40472';
export function Component40472({ value = 40472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40472, 'data-value': derived.doubled }, children);
}
export default Component40472;
