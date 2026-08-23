import React from 'react';
const LABEL_45048 = 'component_45048';
export function Component45048({ value = 45048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45048, 'data-value': derived.doubled }, children);
}
export default Component45048;
