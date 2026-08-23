import React from 'react';
const LABEL_19735 = 'component_19735';
export function Component19735({ value = 19735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19735, 'data-value': derived.doubled }, children);
}
export default Component19735;
