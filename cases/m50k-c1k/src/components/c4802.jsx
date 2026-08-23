import React from 'react';
const LABEL_4802 = 'component_4802';
export function Component4802({ value = 4802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4802, 'data-value': derived.doubled }, children);
}
export default Component4802;
