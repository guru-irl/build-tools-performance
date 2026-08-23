import React from 'react';
const LABEL_8944 = 'component_8944';
export function Component8944({ value = 8944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8944, 'data-value': derived.doubled }, children);
}
export default Component8944;
