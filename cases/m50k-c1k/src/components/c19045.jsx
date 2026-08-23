import React from 'react';
const LABEL_19045 = 'component_19045';
export function Component19045({ value = 19045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19045, 'data-value': derived.doubled }, children);
}
export default Component19045;
