import React from 'react';
const LABEL_18987 = 'component_18987';
export function Component18987({ value = 18987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18987, 'data-value': derived.doubled }, children);
}
export default Component18987;
