import React from 'react';
const LABEL_19068 = 'component_19068';
export function Component19068({ value = 19068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19068, 'data-value': derived.doubled }, children);
}
export default Component19068;
