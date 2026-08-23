import React from 'react';
const LABEL_41672 = 'component_41672';
export function Component41672({ value = 41672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41672, 'data-value': derived.doubled }, children);
}
export default Component41672;
