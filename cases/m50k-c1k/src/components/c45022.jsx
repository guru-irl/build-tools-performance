import React from 'react';
const LABEL_45022 = 'component_45022';
export function Component45022({ value = 45022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45022, 'data-value': derived.doubled }, children);
}
export default Component45022;
