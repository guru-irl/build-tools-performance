import React from 'react';
const LABEL_25165 = 'component_25165';
export function Component25165({ value = 25165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25165, 'data-value': derived.doubled }, children);
}
export default Component25165;
