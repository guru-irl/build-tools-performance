import React from 'react';
const LABEL_46752 = 'component_46752';
export function Component46752({ value = 46752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46752, 'data-value': derived.doubled }, children);
}
export default Component46752;
