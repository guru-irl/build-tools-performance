import React from 'react';
const LABEL_33540 = 'component_33540';
export function Component33540({ value = 33540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33540, 'data-value': derived.doubled }, children);
}
export default Component33540;
