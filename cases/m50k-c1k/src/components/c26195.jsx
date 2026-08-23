import React from 'react';
const LABEL_26195 = 'component_26195';
export function Component26195({ value = 26195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26195, 'data-value': derived.doubled }, children);
}
export default Component26195;
