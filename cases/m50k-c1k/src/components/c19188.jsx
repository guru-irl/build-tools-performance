import React from 'react';
const LABEL_19188 = 'component_19188';
export function Component19188({ value = 19188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19188, 'data-value': derived.doubled }, children);
}
export default Component19188;
