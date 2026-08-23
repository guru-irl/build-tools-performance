import React from 'react';
const LABEL_2843 = 'component_2843';
export function Component2843({ value = 2843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2843, 'data-value': derived.doubled }, children);
}
export default Component2843;
