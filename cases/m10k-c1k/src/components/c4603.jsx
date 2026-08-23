import React from 'react';
const LABEL_4603 = 'component_4603';
export function Component4603({ value = 4603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4603, 'data-value': derived.doubled }, children);
}
export default Component4603;
