import React from 'react';
const LABEL_19829 = 'component_19829';
export function Component19829({ value = 19829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19829, 'data-value': derived.doubled }, children);
}
export default Component19829;
