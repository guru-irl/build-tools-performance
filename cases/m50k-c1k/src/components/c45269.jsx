import React from 'react';
const LABEL_45269 = 'component_45269';
export function Component45269({ value = 45269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45269, 'data-value': derived.doubled }, children);
}
export default Component45269;
