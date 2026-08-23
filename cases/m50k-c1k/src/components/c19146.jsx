import React from 'react';
const LABEL_19146 = 'component_19146';
export function Component19146({ value = 19146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19146, 'data-value': derived.doubled }, children);
}
export default Component19146;
