import React from 'react';
const LABEL_45364 = 'component_45364';
export function Component45364({ value = 45364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45364, 'data-value': derived.doubled }, children);
}
export default Component45364;
