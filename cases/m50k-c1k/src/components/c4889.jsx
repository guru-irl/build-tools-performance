import React from 'react';
const LABEL_4889 = 'component_4889';
export function Component4889({ value = 4889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4889, 'data-value': derived.doubled }, children);
}
export default Component4889;
