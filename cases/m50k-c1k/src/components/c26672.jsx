import React from 'react';
const LABEL_26672 = 'component_26672';
export function Component26672({ value = 26672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26672, 'data-value': derived.doubled }, children);
}
export default Component26672;
