import React from 'react';
const LABEL_19944 = 'component_19944';
export function Component19944({ value = 19944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19944, 'data-value': derived.doubled }, children);
}
export default Component19944;
