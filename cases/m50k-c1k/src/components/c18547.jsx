import React from 'react';
const LABEL_18547 = 'component_18547';
export function Component18547({ value = 18547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18547, 'data-value': derived.doubled }, children);
}
export default Component18547;
