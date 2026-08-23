import React from 'react';
const LABEL_4846 = 'component_4846';
export function Component4846({ value = 4846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4846, 'data-value': derived.doubled }, children);
}
export default Component4846;
