import React from 'react';
const LABEL_45275 = 'component_45275';
export function Component45275({ value = 45275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45275, 'data-value': derived.doubled }, children);
}
export default Component45275;
