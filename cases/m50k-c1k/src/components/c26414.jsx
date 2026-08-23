import React from 'react';
const LABEL_26414 = 'component_26414';
export function Component26414({ value = 26414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26414, 'data-value': derived.doubled }, children);
}
export default Component26414;
