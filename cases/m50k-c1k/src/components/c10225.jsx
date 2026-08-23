import React from 'react';
const LABEL_10225 = 'component_10225';
export function Component10225({ value = 10225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10225, 'data-value': derived.doubled }, children);
}
export default Component10225;
