import React from 'react';
const LABEL_40508 = 'component_40508';
export function Component40508({ value = 40508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40508, 'data-value': derived.doubled }, children);
}
export default Component40508;
