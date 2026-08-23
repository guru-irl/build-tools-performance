import React from 'react';
const LABEL_13930 = 'component_13930';
export function Component13930({ value = 13930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13930, 'data-value': derived.doubled }, children);
}
export default Component13930;
