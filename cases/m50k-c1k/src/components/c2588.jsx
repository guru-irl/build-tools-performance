import React from 'react';
const LABEL_2588 = 'component_2588';
export function Component2588({ value = 2588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2588, 'data-value': derived.doubled }, children);
}
export default Component2588;
