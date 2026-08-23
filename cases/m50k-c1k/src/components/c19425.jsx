import React from 'react';
const LABEL_19425 = 'component_19425';
export function Component19425({ value = 19425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19425, 'data-value': derived.doubled }, children);
}
export default Component19425;
