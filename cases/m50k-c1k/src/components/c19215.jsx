import React from 'react';
const LABEL_19215 = 'component_19215';
export function Component19215({ value = 19215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19215, 'data-value': derived.doubled }, children);
}
export default Component19215;
