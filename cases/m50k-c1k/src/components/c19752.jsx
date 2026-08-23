import React from 'react';
const LABEL_19752 = 'component_19752';
export function Component19752({ value = 19752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19752, 'data-value': derived.doubled }, children);
}
export default Component19752;
