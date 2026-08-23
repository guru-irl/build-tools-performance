import React from 'react';
const LABEL_29936 = 'component_29936';
export function Component29936({ value = 29936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29936, 'data-value': derived.doubled }, children);
}
export default Component29936;
