import React from 'react';
const LABEL_889 = 'component_889';
export function Component889({ value = 889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_889, 'data-value': derived.doubled }, children);
}
export default Component889;
