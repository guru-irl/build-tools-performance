import React from 'react';
const LABEL_2998 = 'component_2998';
export function Component2998({ value = 2998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2998, 'data-value': derived.doubled }, children);
}
export default Component2998;
