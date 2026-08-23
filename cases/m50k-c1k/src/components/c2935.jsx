import React from 'react';
const LABEL_2935 = 'component_2935';
export function Component2935({ value = 2935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2935, 'data-value': derived.doubled }, children);
}
export default Component2935;
