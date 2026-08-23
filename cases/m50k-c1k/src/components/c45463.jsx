import React from 'react';
const LABEL_45463 = 'component_45463';
export function Component45463({ value = 45463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45463, 'data-value': derived.doubled }, children);
}
export default Component45463;
