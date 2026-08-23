import React from 'react';
const LABEL_19253 = 'component_19253';
export function Component19253({ value = 19253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19253, 'data-value': derived.doubled }, children);
}
export default Component19253;
