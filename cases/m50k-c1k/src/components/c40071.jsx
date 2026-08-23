import React from 'react';
const LABEL_40071 = 'component_40071';
export function Component40071({ value = 40071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40071, 'data-value': derived.doubled }, children);
}
export default Component40071;
