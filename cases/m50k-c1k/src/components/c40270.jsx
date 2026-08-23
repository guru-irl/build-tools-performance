import React from 'react';
const LABEL_40270 = 'component_40270';
export function Component40270({ value = 40270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40270, 'data-value': derived.doubled }, children);
}
export default Component40270;
