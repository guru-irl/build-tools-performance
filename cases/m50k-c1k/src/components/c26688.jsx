import React from 'react';
const LABEL_26688 = 'component_26688';
export function Component26688({ value = 26688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26688, 'data-value': derived.doubled }, children);
}
export default Component26688;
