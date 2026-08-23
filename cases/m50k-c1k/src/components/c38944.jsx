import React from 'react';
const LABEL_38944 = 'component_38944';
export function Component38944({ value = 38944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38944, 'data-value': derived.doubled }, children);
}
export default Component38944;
