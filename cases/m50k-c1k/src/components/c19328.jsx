import React from 'react';
const LABEL_19328 = 'component_19328';
export function Component19328({ value = 19328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19328, 'data-value': derived.doubled }, children);
}
export default Component19328;
