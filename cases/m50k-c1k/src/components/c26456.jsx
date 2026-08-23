import React from 'react';
const LABEL_26456 = 'component_26456';
export function Component26456({ value = 26456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26456, 'data-value': derived.doubled }, children);
}
export default Component26456;
