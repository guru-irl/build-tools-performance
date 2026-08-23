import React from 'react';
const LABEL_19846 = 'component_19846';
export function Component19846({ value = 19846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19846, 'data-value': derived.doubled }, children);
}
export default Component19846;
