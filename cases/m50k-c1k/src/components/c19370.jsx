import React from 'react';
const LABEL_19370 = 'component_19370';
export function Component19370({ value = 19370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19370, 'data-value': derived.doubled }, children);
}
export default Component19370;
