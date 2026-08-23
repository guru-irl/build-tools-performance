import React from 'react';
const LABEL_2897 = 'component_2897';
export function Component2897({ value = 2897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2897, 'data-value': derived.doubled }, children);
}
export default Component2897;
