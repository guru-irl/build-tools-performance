import React from 'react';
const LABEL_18900 = 'component_18900';
export function Component18900({ value = 18900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18900, 'data-value': derived.doubled }, children);
}
export default Component18900;
