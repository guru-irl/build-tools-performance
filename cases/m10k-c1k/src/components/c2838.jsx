import React from 'react';
const LABEL_2838 = 'component_2838';
export function Component2838({ value = 2838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2838, 'data-value': derived.doubled }, children);
}
export default Component2838;
