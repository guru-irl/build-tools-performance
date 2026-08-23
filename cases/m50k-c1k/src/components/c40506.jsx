import React from 'react';
const LABEL_40506 = 'component_40506';
export function Component40506({ value = 40506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40506, 'data-value': derived.doubled }, children);
}
export default Component40506;
