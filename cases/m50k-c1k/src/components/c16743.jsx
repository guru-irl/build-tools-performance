import React from 'react';
const LABEL_16743 = 'component_16743';
export function Component16743({ value = 16743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16743, 'data-value': derived.doubled }, children);
}
export default Component16743;
