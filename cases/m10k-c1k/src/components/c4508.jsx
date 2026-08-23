import React from 'react';
const LABEL_4508 = 'component_4508';
export function Component4508({ value = 4508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4508, 'data-value': derived.doubled }, children);
}
export default Component4508;
