import React from 'react';
const LABEL_19044 = 'component_19044';
export function Component19044({ value = 19044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19044, 'data-value': derived.doubled }, children);
}
export default Component19044;
