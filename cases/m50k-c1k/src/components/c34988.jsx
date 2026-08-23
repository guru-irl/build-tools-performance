import React from 'react';
const LABEL_34988 = 'component_34988';
export function Component34988({ value = 34988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34988, 'data-value': derived.doubled }, children);
}
export default Component34988;
