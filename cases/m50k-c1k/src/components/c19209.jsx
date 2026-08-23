import React from 'react';
const LABEL_19209 = 'component_19209';
export function Component19209({ value = 19209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19209, 'data-value': derived.doubled }, children);
}
export default Component19209;
