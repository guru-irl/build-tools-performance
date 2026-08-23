import React from 'react';
const LABEL_40752 = 'component_40752';
export function Component40752({ value = 40752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40752, 'data-value': derived.doubled }, children);
}
export default Component40752;
