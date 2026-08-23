import React from 'react';
const LABEL_19302 = 'component_19302';
export function Component19302({ value = 19302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19302, 'data-value': derived.doubled }, children);
}
export default Component19302;
