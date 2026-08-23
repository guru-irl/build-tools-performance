import React from 'react';
const LABEL_4045 = 'component_4045';
export function Component4045({ value = 4045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4045, 'data-value': derived.doubled }, children);
}
export default Component4045;
