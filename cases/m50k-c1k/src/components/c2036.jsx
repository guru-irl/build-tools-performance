import React from 'react';
const LABEL_2036 = 'component_2036';
export function Component2036({ value = 2036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2036, 'data-value': derived.doubled }, children);
}
export default Component2036;
