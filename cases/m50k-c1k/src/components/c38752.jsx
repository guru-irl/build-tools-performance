import React from 'react';
const LABEL_38752 = 'component_38752';
export function Component38752({ value = 38752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38752, 'data-value': derived.doubled }, children);
}
export default Component38752;
