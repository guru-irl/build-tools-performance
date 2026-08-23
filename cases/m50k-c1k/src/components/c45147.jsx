import React from 'react';
const LABEL_45147 = 'component_45147';
export function Component45147({ value = 45147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45147, 'data-value': derived.doubled }, children);
}
export default Component45147;
