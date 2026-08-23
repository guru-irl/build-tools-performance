import React from 'react';
const LABEL_31993 = 'component_31993';
export function Component31993({ value = 31993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31993, 'data-value': derived.doubled }, children);
}
export default Component31993;
