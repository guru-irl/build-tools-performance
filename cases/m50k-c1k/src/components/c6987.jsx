import React from 'react';
const LABEL_6987 = 'component_6987';
export function Component6987({ value = 6987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6987, 'data-value': derived.doubled }, children);
}
export default Component6987;
