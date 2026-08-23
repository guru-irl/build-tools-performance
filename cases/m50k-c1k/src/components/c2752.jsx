import React from 'react';
const LABEL_2752 = 'component_2752';
export function Component2752({ value = 2752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2752, 'data-value': derived.doubled }, children);
}
export default Component2752;
