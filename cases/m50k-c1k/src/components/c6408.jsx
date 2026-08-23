import React from 'react';
const LABEL_6408 = 'component_6408';
export function Component6408({ value = 6408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6408, 'data-value': derived.doubled }, children);
}
export default Component6408;
