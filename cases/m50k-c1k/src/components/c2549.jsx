import React from 'react';
const LABEL_2549 = 'component_2549';
export function Component2549({ value = 2549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2549, 'data-value': derived.doubled }, children);
}
export default Component2549;
