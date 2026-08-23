import React from 'react';
const LABEL_2297 = 'component_2297';
export function Component2297({ value = 2297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2297, 'data-value': derived.doubled }, children);
}
export default Component2297;
