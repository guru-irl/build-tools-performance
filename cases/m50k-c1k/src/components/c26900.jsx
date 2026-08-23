import React from 'react';
const LABEL_26900 = 'component_26900';
export function Component26900({ value = 26900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26900, 'data-value': derived.doubled }, children);
}
export default Component26900;
