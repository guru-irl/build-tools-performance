import React from 'react';
const LABEL_10936 = 'component_10936';
export function Component10936({ value = 10936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10936, 'data-value': derived.doubled }, children);
}
export default Component10936;
