import React from 'react';
const LABEL_45781 = 'component_45781';
export function Component45781({ value = 45781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45781, 'data-value': derived.doubled }, children);
}
export default Component45781;
