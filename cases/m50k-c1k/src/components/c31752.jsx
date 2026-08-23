import React from 'react';
const LABEL_31752 = 'component_31752';
export function Component31752({ value = 31752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31752, 'data-value': derived.doubled }, children);
}
export default Component31752;
