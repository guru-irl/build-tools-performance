import React from 'react';
const LABEL_45790 = 'component_45790';
export function Component45790({ value = 45790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45790, 'data-value': derived.doubled }, children);
}
export default Component45790;
