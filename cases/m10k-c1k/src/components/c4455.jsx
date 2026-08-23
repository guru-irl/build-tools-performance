import React from 'react';
const LABEL_4455 = 'component_4455';
export function Component4455({ value = 4455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4455, 'data-value': derived.doubled }, children);
}
export default Component4455;
