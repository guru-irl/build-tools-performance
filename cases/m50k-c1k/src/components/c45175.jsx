import React from 'react';
const LABEL_45175 = 'component_45175';
export function Component45175({ value = 45175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45175, 'data-value': derived.doubled }, children);
}
export default Component45175;
