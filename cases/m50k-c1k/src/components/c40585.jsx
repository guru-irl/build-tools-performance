import React from 'react';
const LABEL_40585 = 'component_40585';
export function Component40585({ value = 40585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40585, 'data-value': derived.doubled }, children);
}
export default Component40585;
