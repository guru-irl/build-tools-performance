import React from 'react';
const LABEL_25260 = 'component_25260';
export function Component25260({ value = 25260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25260, 'data-value': derived.doubled }, children);
}
export default Component25260;
