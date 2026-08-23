import React from 'react';
const LABEL_44783 = 'component_44783';
export function Component44783({ value = 44783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44783, 'data-value': derived.doubled }, children);
}
export default Component44783;
