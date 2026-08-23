import React from 'react';
const LABEL_4528 = 'component_4528';
export function Component4528({ value = 4528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4528, 'data-value': derived.doubled }, children);
}
export default Component4528;
