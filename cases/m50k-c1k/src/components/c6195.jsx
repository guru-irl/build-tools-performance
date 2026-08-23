import React from 'react';
const LABEL_6195 = 'component_6195';
export function Component6195({ value = 6195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6195, 'data-value': derived.doubled }, children);
}
export default Component6195;
