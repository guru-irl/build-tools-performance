import React from 'react';
const LABEL_45413 = 'component_45413';
export function Component45413({ value = 45413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45413, 'data-value': derived.doubled }, children);
}
export default Component45413;
