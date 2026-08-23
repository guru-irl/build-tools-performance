import React from 'react';
const LABEL_38522 = 'component_38522';
export function Component38522({ value = 38522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38522, 'data-value': derived.doubled }, children);
}
export default Component38522;
