import React from 'react';
const LABEL_4739 = 'component_4739';
export function Component4739({ value = 4739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4739, 'data-value': derived.doubled }, children);
}
export default Component4739;
