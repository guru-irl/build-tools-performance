import React from 'react';
const LABEL_19059 = 'component_19059';
export function Component19059({ value = 19059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19059, 'data-value': derived.doubled }, children);
}
export default Component19059;
