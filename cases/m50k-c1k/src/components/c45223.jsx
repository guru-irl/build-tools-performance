import React from 'react';
const LABEL_45223 = 'component_45223';
export function Component45223({ value = 45223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45223, 'data-value': derived.doubled }, children);
}
export default Component45223;
