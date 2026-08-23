import React from 'react';
const LABEL_45627 = 'component_45627';
export function Component45627({ value = 45627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45627, 'data-value': derived.doubled }, children);
}
export default Component45627;
