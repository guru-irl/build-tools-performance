import React from 'react';
const LABEL_10144 = 'component_10144';
export function Component10144({ value = 10144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10144, 'data-value': derived.doubled }, children);
}
export default Component10144;
