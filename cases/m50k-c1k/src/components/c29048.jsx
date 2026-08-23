import React from 'react';
const LABEL_29048 = 'component_29048';
export function Component29048({ value = 29048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29048, 'data-value': derived.doubled }, children);
}
export default Component29048;
