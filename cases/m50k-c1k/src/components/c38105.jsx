import React from 'react';
const LABEL_38105 = 'component_38105';
export function Component38105({ value = 38105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38105, 'data-value': derived.doubled }, children);
}
export default Component38105;
