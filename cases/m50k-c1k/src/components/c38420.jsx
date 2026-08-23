import React from 'react';
const LABEL_38420 = 'component_38420';
export function Component38420({ value = 38420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38420, 'data-value': derived.doubled }, children);
}
export default Component38420;
