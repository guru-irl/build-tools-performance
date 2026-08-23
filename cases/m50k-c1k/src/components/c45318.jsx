import React from 'react';
const LABEL_45318 = 'component_45318';
export function Component45318({ value = 45318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45318, 'data-value': derived.doubled }, children);
}
export default Component45318;
