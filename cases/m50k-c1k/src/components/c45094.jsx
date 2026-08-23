import React from 'react';
const LABEL_45094 = 'component_45094';
export function Component45094({ value = 45094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45094, 'data-value': derived.doubled }, children);
}
export default Component45094;
