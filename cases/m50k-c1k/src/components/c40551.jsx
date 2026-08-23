import React from 'react';
const LABEL_40551 = 'component_40551';
export function Component40551({ value = 40551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40551, 'data-value': derived.doubled }, children);
}
export default Component40551;
