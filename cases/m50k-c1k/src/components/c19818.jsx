import React from 'react';
const LABEL_19818 = 'component_19818';
export function Component19818({ value = 19818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19818, 'data-value': derived.doubled }, children);
}
export default Component19818;
