import React from 'react';
const LABEL_14992 = 'component_14992';
export function Component14992({ value = 14992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14992, 'data-value': derived.doubled }, children);
}
export default Component14992;
