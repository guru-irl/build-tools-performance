import React from 'react';
const LABEL_38973 = 'component_38973';
export function Component38973({ value = 38973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38973, 'data-value': derived.doubled }, children);
}
export default Component38973;
