import React from 'react';
const LABEL_19352 = 'component_19352';
export function Component19352({ value = 19352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19352, 'data-value': derived.doubled }, children);
}
export default Component19352;
