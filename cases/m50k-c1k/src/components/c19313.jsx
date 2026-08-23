import React from 'react';
const LABEL_19313 = 'component_19313';
export function Component19313({ value = 19313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19313, 'data-value': derived.doubled }, children);
}
export default Component19313;
