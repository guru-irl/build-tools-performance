import React from 'react';
const LABEL_2405 = 'component_2405';
export function Component2405({ value = 2405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2405, 'data-value': derived.doubled }, children);
}
export default Component2405;
