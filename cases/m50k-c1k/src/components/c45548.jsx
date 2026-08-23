import React from 'react';
const LABEL_45548 = 'component_45548';
export function Component45548({ value = 45548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45548, 'data-value': derived.doubled }, children);
}
export default Component45548;
