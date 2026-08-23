import React from 'react';
const LABEL_40566 = 'component_40566';
export function Component40566({ value = 40566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40566, 'data-value': derived.doubled }, children);
}
export default Component40566;
