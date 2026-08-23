import React from 'react';
const LABEL_19873 = 'component_19873';
export function Component19873({ value = 19873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19873, 'data-value': derived.doubled }, children);
}
export default Component19873;
